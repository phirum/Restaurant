Restaurant.Collection.Locations.before.insert(function (userId, doc) {
    var prefix=doc.branchId+"-";
    doc._id = idGenerator.genWithPrefix(Restaurant.Collection.Locations,prefix,3);
});
