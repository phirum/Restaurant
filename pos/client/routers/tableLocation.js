
var subs = new SubsManager();
posRoutes.route('/tableLocation', {
    name: 'pos.tableLocation',
    subscriptions: function (params, queryParams) {
        this.register(
            'pos_tableLocation',
            Meteor.subscribe('posTableLocation')
        );
    },
    action: function (params, queryParams) {
        Layout.main('pos_tableLocation');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Location',
        parent: 'pos.home'
    }
});