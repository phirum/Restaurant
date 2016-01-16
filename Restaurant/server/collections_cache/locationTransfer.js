Restaurant.Collection.LocationTransfers.cacheTimestamp();
Restaurant.Collection.LocationTransfers.cacheCount('locationTransferDetailCount', Restaurant.Collection.LocationTransferDetails, 'locationTransferId');
Restaurant.Collection.LocationTransfers.cacheDoc('staff', Restaurant.Collection.Staffs, ['name']);
Restaurant.Collection.LocationTransfers.cacheDoc('fromLocation', Restaurant.Collection.Locations, ['name'], 'fromLocationId');
Restaurant.Collection.LocationTransfers.cacheDoc('toLocation', Restaurant.Collection.Locations, ['name'], 'toLocationId');
Restaurant.Collection.LocationTransfers.cacheDoc('branch', Cpanel.Collection.Branch, ['khName', 'enName']);
