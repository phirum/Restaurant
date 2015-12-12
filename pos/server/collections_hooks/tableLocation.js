Pos.Collection.TableLocations.before.insert(function (userId, doc) {
    var prefix = doc.branchId + "-";
    doc._id = idGenerator.genWithPrefix(Pos.Collection.TableLocations, prefix, 3);
});
