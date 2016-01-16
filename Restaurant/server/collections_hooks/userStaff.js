Restaurant.Collection.UserStaffs.before.insert(function (userId, doc) {
    var prefix=doc.branchId+"-";
    doc._id = idGenerator.genWithPrefix(Restaurant.Collection.UserStaffs,prefix,4);
});