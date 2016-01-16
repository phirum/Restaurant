Restaurant.Collection.Adjustments.cacheTimestamp();
Restaurant.Collection.Adjustments.cacheCount('adjustmentDetailCount', Restaurant.Collection.AdjustmentDetails, 'adjustmentId');
Restaurant.Collection.Adjustments.cacheDoc('staff',Restaurant.Collection.Staffs,['name']);
Restaurant.Collection.Adjustments.cacheDoc('branch',Cpanel.Collection.Branch,['khName','enName']);
