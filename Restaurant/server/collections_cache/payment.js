Restaurant.Collection.Payments.cacheTimestamp();
Restaurant.Collection.Payments.cacheDoc('sale',Restaurant.Collection.Sales,['_customer','total']);
Restaurant.Collection.Payments.cacheDoc('purchase',Restaurant.Collection.Purchases,['_supplier','total']);
Restaurant.Collection.Payments.cacheDoc('branch',Cpanel.Collection.Branch,['khName','enName']);