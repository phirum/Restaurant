Pos.Collection.TableLocations = new Mongo.Collection("pos_tableLocations");
Pos.Schema.TableLocations = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        unique: true,
        max: 200
    },
    description: {
        type: String,
        label: "Description",
        optional: true
    },
    branchId:{
        type:String,
        label:"Branch"
    }
});
Pos.Collection.TableLocations.attachSchema(Pos.Schema.TableLocations);
