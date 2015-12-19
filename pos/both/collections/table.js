Pos.Collection.Tables = new Mongo.Collection("pos_tables");
Pos.Schema.Tables = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        unique: true,
        max: 200
    },
    tableLocationId: {
        type: String,
        label: "Table Location",
        autoform: {
            type: "select2",
            options: function () {
                return Pos.List.tableLocations();
            }
        }
    },
    description: {
        type: String,
        label: "Description",
        optional: true
    },
    branchId: {
        type: String,
        label: "Branch"
    },
    left:{
        type:String,
        label:"Left",
        optional:true
    },
    top:{
        type:String,
        label:"Top",
        optional:true
    }
});
Pos.Collection.Tables.attachSchema(Pos.Schema.Tables);
