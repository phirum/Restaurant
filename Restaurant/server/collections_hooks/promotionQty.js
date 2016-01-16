Restaurant.Collection.PromotionQuantities.before.insert(function (userId, doc) {
    var prefix=doc.branchId+"-";
    doc._id = idGenerator.genWithPrefix(Restaurant.Collection.PromotionQuantities, prefix, 7);
});