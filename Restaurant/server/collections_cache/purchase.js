Restaurant.Collection.Purchases.cacheTimestamp();
Restaurant.Collection.Purchases.cacheCount('paymentCount', Restaurant.Collection.Payments, 'purchaseId');
Restaurant.Collection.Purchases.cacheCount('purchaseDetailCount', Restaurant.Collection.PurchaseDetails, 'purchaseId');
Restaurant.Collection.Purchases.cacheDoc('staff',Restaurant.Collection.Staffs,['name']);
Restaurant.Collection.Purchases.cacheDoc('exchangeRate',Restaurant.Collection.ExchangeRates,['base','rates']);
Restaurant.Collection.Purchases.cacheDoc('supplier',Restaurant.Collection.Suppliers,['name']);
Restaurant.Collection.Purchases.cacheDoc('branch',Cpanel.Collection.Branch,['khName','enName']);
