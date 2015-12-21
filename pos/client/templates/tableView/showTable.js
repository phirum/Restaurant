var posShowTableTPL = Template.pos_showTable;

posShowTableTPL.onRendered(function(){
    $('.drag-obj').draggable({
        handle:'.handle-drag',
        stop:function(evt,ui){
            var left = ui.position.left;
            var top = ui.position.top;
            Pos.Collection.Tables.update($(this).attr('id'),{$set:{left:left,top:top}});
        }
    });
});

posShowTableTPL.events({

});
posShowTableTPL.helpers({

});

