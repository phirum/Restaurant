var posTableViewTPL = Template.pos_tableView;

posTableViewTPL.events({

});
posTableViewTPL.helpers({
    tableLocations:function(){
       return Pos.Collection.TableLocations.find();
    },
    tables:function(){
        return Pos.Collection.Tables.find({tableLocationId:this._id});
    }
});
