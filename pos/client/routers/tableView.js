var subs = new SubsManager();
posRoutes.route('/tableView', {
    name: 'pos.tableView',
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
        Layout.main('pos_tableView');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'TableView',
        parent: 'pos.home'
    }
});