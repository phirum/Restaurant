Restaurant.Collection.PromotionPercentages.before.insert(function (userId, doc) {
    var prefix=doc.branchId+"-";
    doc._id = idGenerator.genWithPrefix(Restaurant.Collection.PromotionPercentages, prefix, 7);
});