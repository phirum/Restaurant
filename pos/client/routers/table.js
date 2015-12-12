
var subs = new SubsManager();
posRoutes.route('/table', {
    name: 'pos.table',
    subscriptions: function (params, queryParams) {
        this.register(
            'pos_table',
            Meteor.subscribe('posTable')
        );
        this.register(
            'pos_tableLocation',
            Meteor.subscribe('posTableLocation')
        );
    },
    action: function (params, queryParams) {
        Layout.main('pos_table');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Location',
        parent: 'pos.home'
    }
});