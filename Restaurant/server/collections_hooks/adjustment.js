Restaurant.Collection.Adjustments.after.remove(function(userId,doc){
    Restaurant.Collection.AdjustmentDetails.direct.remove({adjustmentId: doc._id});
});