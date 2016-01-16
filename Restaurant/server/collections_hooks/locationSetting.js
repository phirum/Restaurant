Restaurant.Collection.LocationSettings.before.insert(function (userId, doc) {
    var prefix=doc.branchId+"-";
    doc._id = idGenerator.genWithPrefix(Restaurant.Collection.LocationSettings,prefix,3);
});
