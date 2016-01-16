Restaurant.Collection.Locations.cacheTimestamp();
Restaurant.Collection.Locations.cacheCount('saleCount', Restaurant.Collection.Sales, 'locationId');
Restaurant.Collection.Locations.cacheCount('purchaseCount', Restaurant.Collection.Purchases, 'locationId');
Restaurant.Collection.Locations.cacheDoc('branch',Cpanel.Collection.Branch,['khName','enName']);