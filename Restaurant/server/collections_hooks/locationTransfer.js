Restaurant.Collection.LocationTransferDetails.before.insert(function (user, doc) {
    doc._id = idGenerator.genWithPrefix(Restaurant.Collection.LocationTransferDetails, doc.locationTransferId, 3);
});
Restaurant.Collection.LocationTransfers.before.update(function (userId, doc, fieldNames, modifier, options) {
    Meteor.defer(function () {
        if (modifier.$set.toLocationId != null && modifier.$set.toLocationId != doc.toLocationId) {
            Restaurant.Collection.LocationTransferDetails.update(
                {locationTransferId: doc._id},
                {$set: {toLocationId: modifier.$set.toLocationId}},
                {multi: true});
        }
    });
});
Restaurant.Collection.LocationTransfers.after.remove(function (userId, doc) {
    Restaurant.Collection.LocationTransferDetails.remove({locationTransferId: doc._id});
    //Restaurant.Collection.SaleDetails.direct.remove({saleId: doc._id});
});
