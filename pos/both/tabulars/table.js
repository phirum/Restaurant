Pos.TabularTable.Tables = new Tabular.Table({
    name: "posTableList",
    collection: Pos.Collection.Tables,
    columns: [
        {
            title: '<i class="fa fa-bars"></i>',
            tmpl: Meteor.isClient && Template.pos_tableAction
        },
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "_tableLocation.name", title: "Table Location"},
        {data: "description", title: "Description"}
    ],
    order: [['1', 'desc']],
    columnDefs: [
        {"width": "12px", "targets": 0}
    ]
});