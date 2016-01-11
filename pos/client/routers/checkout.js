/*
 Router.route('pos/checkout/:saleId?', function () {
 this.render('pos_checkout');
 },
 {
 name: 'pos.checkout',
 header: {title: 'Checkout', sub: '', icon: 'money'},
 data:function(){
 var saleId=this.params.saleId;
 Session.set('saleId',saleId);
 },
 title:'pos-checkout'
 //template:'sale',
 //layoutTemplate:'saleLayout'

 }
 );
 */


var subs = new SubsManager();
posRoutes.route('/checkout/:saleId?', {
    name: 'pos.checkout',
    subscriptions: function (params, queryParams) {
        var branchId = Session.get('currentBranch');
        this.register(
            'pos_sale',
            Meteor.subscribe('posSale', {branchId: branchId})
        );
        this.register(
            'pos_saleDetail',
            Meteor.subscribe('posSaleDetail', {branchId: branchId})
        );
        this.register(
            'pos_exchangeRate',
            Meteor.subscribe('posExchangeRate', {branchId: branchId})
        );

    },
    action: function (params, queryParams) {
        //Layout.main('pos_checkout');
        Layout.render('printLayout', 'pos_checkout');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Checkout',
        parent: 'pos.home'
    }
});

/*
 Router.map(function () {
 this.route('pos/checkout/print/:saleId',
 {
 layoutTemplate: 'printLayout',
 // path:'/checkout/:saleId',
 name: 'print',
 data: function () {
 var saleId = this.params.saleId;
 Session.set('saleId', saleId);
 },
 template: 'print',
 title:'pos-checkout-print'
 });
 });*/



//var subs = new SubsManager();
posRoutes.route('/checkout/print/:saleId', {
    name: 'pos.printCheckout',
    subscriptions: function (params, queryParams) {
    },
    action: function (params, queryParams) {
        Layout.render('printLayout', 'pos_printCheckout');
    },
    layoutTemplate: 'printLayout'
    /* breadcrumb: {
     //params: ['id'],
     //queryParams: ['show', 'color'],
     title: 'Checkout',
     parent: 'pos.home'
     }*/
});