Session.setDefault('unitSession', null);
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
    thatUnit: function (unitId) {
        return unitId == Session.get('unitSession');
    },
    categories: function () {
        return ReactiveMethod.call('findRecords', 'Pos.Collection.Categories', {}, {});
    },
    units: function () {
        return ReactiveMethod.call('findRecords', 'Pos.Collection.Units', {}, {});
    },
    products: function () {
        var selector = {};
        selector.categoryId = this._id;
        var unitSession = Session.get('unitSession');
        if (unitSession) {
            selector.unitId = unitSession;
        }
        return ReactiveMethod.call('findProducts', selector, {});
    }
});
Template.pos_checkout.events({
    'click .unit': function () {
        Session.set('unitSession', this._id);
    }
});
