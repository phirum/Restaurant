var posTableLocationTPL = Template.pos_tableLocation;
var posTableLocationInsertTPL = Template.pos_tableLocationInsert;
var posTableLocationUpdateTPL = Template.pos_tableLocationUpdate;
var posTableLocationShowTPL = Template.pos_tableLocationShow;

posTableLocationTPL.onRendered(function () {
    createNewAlertify(['tableLocation', 'tableLocationShow']);
});
posTableLocationTPL.helpers({
    selector: function () {
        var selector = {};
        selector.branchId = Session.get('currentBranch');
        return selector;
    }
});
posTableLocationTPL.events({
    'click .insert': function (e, t) {
        alertify.tableLocation(fa('plus', 'Add New TableLocation'), renderTemplate(posTableLocationInsertTPL)).maximize();
    },
    'click .update': function (e, t) {
        var data = Pos.Collection.TableLocations.findOne(this._id);
        alertify.tableLocation(fa('pencil', 'Update Existing TableLocation'), renderTemplate(posTableLocationUpdateTPL, data)).maximize();
    },
    'click .remove': function (e, t) {
        var id = this._id;
        var canRemove = (this._productCount == null || this._productCount == 0);
        alertify.confirm("Are you sure to delete [" + id + "]?")
            .set({
                onok: function (closeEvent) {
                    /* var relation = relationExist(
                     [
                     {collection: Pos.Collection.Products, selector: {tableLocationId:id}}
                     ]
                     );*/
                    if (canRemove) {
                        Pos.Collection.TableLocations.remove(id, function (error) {
                            if (error) {
                                alertify.error(error.message);
                            } else {
                                alertify.success("Success");
                            }
                        });
                    } else {
                        alertify.warning("Data has been used. Can't remove.");
                    }
                },
                title: '<i class="fa fa-remove"></i> Delete TableLocation'
            });
    },
    'click .show': function (e, t) {
        alertify.tableLocationShow(fa('eye', 'TableLocation Detail'), renderTemplate(posTableLocationShowTPL, this))
    }
});
AutoForm.hooks({
    // Customer
    pos_tableLocationInsert: {
        before: {
            insert: function (doc) {
                doc.branchId = Session.get('currentBranch');
                return doc;
            }
        },
        onSuccess: function (formType, result) {
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    },
    pos_tableLocationUpdate: {
        onSuccess: function (formType, result) {
            alertify.tableLocation().close();
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    }
});

