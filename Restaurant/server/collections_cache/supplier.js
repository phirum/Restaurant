Restaurant.Collection.Suppliers.cacheTimestamp();
Restaurant.Collection.Suppliers.cacheCount('purchaseCount', Restaurant.Collection.Purchases, 'supplierId');
Restaurant.Collection.Suppliers.cacheDoc('branch',Cpanel.Collection.Branch,['khName','enName']);