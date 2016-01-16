var restaurantShowTableTPL = Template.restaurant_showTable;

restaurantShowTableTPL.onRendered(function(){
    $('.drag-obj').draggable({
        handle:'.handle-drag',
        stop:function(evt,ui){
            var left = ui.restaurantition.left;
            var top = ui.restaurantition.top;
            Restaurant.Collection.Tables.update($(this).attr('id'),{$set:{left:left,top:top}});
        }
    });
});

restaurantShowTableTPL.events({

});
restaurantShowTableTPL.helpers({

});

