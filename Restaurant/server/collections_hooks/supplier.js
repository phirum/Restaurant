Restaurant.Collection.Suppliers.before.insert(function (userId, doc) {
    var prefix=doc.branchId+"-";
    doc._id = idGenerator.genWithPrefix(Restaurant.Collection.Suppliers,prefix,5);
});