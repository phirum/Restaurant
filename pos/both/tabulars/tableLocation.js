Pos.TabularTable.TableLocations = new Tabular.Table({
    name: "posTableLocationList",
    collection: Pos.Collection.TableLocations,
    columns: [
        {
            title: '<i class="fa fa-bars"></i>',
            tmpl: Meteor.isClient && Template.pos_tableLocationAction
        },
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "description", title: "Description"}
    ],
    order: [['1', 'desc']],
    columnDefs: [
        {"width": "12px", "targets": 0}
    ]
});