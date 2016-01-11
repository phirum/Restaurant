Session.setDefault('isRetail', true);
Session.setDefault('hasUpdate', false);
Template.pos_checkout.onRendered(function () {
    createNewAlertify(["customer", "userStaff"]);
    Session.set('isRetail', true);
    $('#sale-date').datetimepicker({
        format: "MM/DD/YYYY hh:mm:ss A"
    });
    //$('#product-id').select2();
    $('#product-barcode').focus();
    setTimeout(function () {
        $('.select-two').select2();
        var s = Pos.Collection.Sales.findOne({
            _id: FlowRouter.getParam('saleId'),
            status: "Unsaved",
            branchId: Session.get('currentBranch')
        });
        if (s == null) {
            FlowRouter.go('pos.checkout');
            $('#product-barcode').focus();
        }
    }, 500);
});
Template.pos_checkout.helpers({
    categories: function () {
        debugger;
        return ReactiveMethod.call('findRecords', 'Pos.Collection.Categories', {}, {});
    },
    products: function () {
        return ReactiveMethod.call('findRecords', 'Pos.Collection.Products', {categoryId: this._id}, {});
    }
});
Template.pos_checkout.events({});
