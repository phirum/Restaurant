var posTableViewTPL = Template.pos_tableView;

posTableViewTPL.events({});
posTableViewTPL.helpers({
    tableLocations: function () {
        return ReactiveMethod.call('findRecords', 'Pos.Collection.TableLocations', {}, {});
    },
    tables: function () {
        return ReactiveMethod.call('findRecords', 'Pos.Collection.Tables', {tableLocationId: this._id}, {});
    }
});
