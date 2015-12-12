var posTableTPL = Template.pos_table;
var posTableInsertTPL = Template.pos_tableInsert;
var posTableUpdateTPL = Template.pos_tableUpdate;
var posTableShowTPL = Template.pos_tableShow;

posTableTPL.onRendered(function () {
    createNewAlertify(['table', 'tableShow']);
});
posTableTPL.helpers({
    selector: function () {
        var selector = {};
        selector.branchId = Session.get('currentBranch');
        return selector;
    }
});
posTableTPL.events({
    'click .insert': function (e, t) {
        alertify.table(fa('plus', 'Add New Table'), renderTemplate(posTableInsertTPL)).maximize();
    },
    'click .update': function (e, t) {
        var data = Pos.Collection.Tables.findOne(this._id);
        alertify.table(fa('pencil', 'Update Existing Table'), renderTemplate(posTableUpdateTPL, data)).maximize();
    },
    'click .remove': function (e, t) {
        var id = this._id;
        var canRemove = (this._productCount == null || this._productCount == 0);
        alertify.confirm("Are you sure to delete [" + id + "]?")
            .set({
                onok: function (closeEvent) {
                    /* var relation = relationExist(
                     [
                     {collection: Pos.Collection.Products, selector: {tableId:id}}
                     ]
                     );*/
                    if (canRemove) {
                        Pos.Collection.Tables.remove(id, function (error) {
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
                title: '<i class="fa fa-remove"></i> Delete Table'
            });
    },
    'click .show': function (e, t) {
        alertify.tableShow(fa('eye', 'Table Detail'), renderTemplate(posTableShowTPL, this))
    }
});
AutoForm.hooks({
    // Customer
    pos_tableInsert: {
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
    pos_tableUpdate: {
        onSuccess: function (formType, result) {
            alertify.table().close();
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    }
});

