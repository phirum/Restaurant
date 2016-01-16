Restaurant.Collection.ExchangeRates.before.insert(function (userId, doc) {
    var prefix=doc.branchId+"-";
    doc._id = idGenerator.genWithPrefix(Restaurant.Collection.ExchangeRates,prefix,9);
});