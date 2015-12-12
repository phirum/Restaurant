Pos.Collection.Tables.before.insert(function (userId, doc) {
    var prefix = doc.branchId + "-";
    doc._id = idGenerator.genWithPrefix(Pos.Collection.Tables, prefix, 5);
});
