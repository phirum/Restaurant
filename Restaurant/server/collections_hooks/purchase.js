Restaurant.Collection.PurchaseDetails.before.insert(function (user, doc) {
    doc._id = idGenerator.genWithPrefix(Restaurant.Collection.PurchaseDetails, doc.purchaseId, 3);
});
Restaurant.Collection.PurchaseDetails.after.remove(function (userId, doc) {
    var purchase = Restaurant.Collection.Purchases.findOne(doc.purchaseId);
    if (purchase != null) {
        updatePurchaseTotal(doc.purchaseId);
    }
});
Restaurant.Collection.Purchases.before.update(function (userId, doc, fieldNames, modifier, options) {
    Meteor.defer(function () {
        if (modifier.$set.locationId != null && modifier.$set.locationId != doc.locationId) {
            Restaurant.Collection.PurchaseDetails.update(
                {purchaseId: doc._id},
                {$set: {locationId: modifier.$set.locationId}},
                {multi: true});
        }
    });
});
Restaurant.Collection.Purchases.after.update(function (userId, doc, fieldNames, modifier, options) {
    updatePurchaseTotal(doc._id);
});

Restaurant.Collection.PurchaseDetails.after.insert(function (userId, doc) {
    updatePurchaseTotal(doc.purchaseId);

});

Restaurant.Collection.PurchaseDetails.after.update(function (userId, doc, fieldNames, modifier, options) {
    updatePurchaseTotal(doc.purchaseId);
});

Restaurant.Collection.Purchases.after.remove(function (userId, doc) {
    Restaurant.Collection.PurchaseDetails.remove({purchaseId: doc._id});
    //Restaurant.Collection.PurchaseDetails.direct.remove({purchaseId: doc._id});
});

function updatePurchaseTotal(purchaseId) {
    Meteor.defer(function () {
        //var discount = Restaurant.Collection.Purchases.findOne(purchaseId).discountAmount;
        var discount = Restaurant.Collection.Purchases.findOne(purchaseId).discount;
        var purchaseSubTotal = 0;
        var purchaseDetails = Restaurant.Collection.PurchaseDetails.find({purchaseId: purchaseId});
        purchaseDetails.forEach(function (purchaseDetail) {
            purchaseSubTotal += parseFloat(purchaseDetail.amount);
        });
        var baseCurrencyId = Cpanel.Collection.Setting.findOne().baseCurrency;
        //var total = purchaseSubTotal - discount;
        var total = purchaseSubTotal * (1 - discount / 100);
        if (baseCurrencyId == "KHR") {
            total = roundRielCurrency(total);
        }
        var set = {};
        set.subTotal = purchaseSubTotal;
        set.total = total;
        set.owedAmount = total;
        //set.discountAmount=purchaseSubTotal-total;
        Restaurant.Collection.Purchases.direct.update(purchaseId, {$set: set});
        //Meteor.call('updatePurchase', purchaseId, set);
    });

}
