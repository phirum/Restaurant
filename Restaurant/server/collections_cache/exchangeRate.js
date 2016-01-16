Restaurant.Collection.ExchangeRates.cacheTimestamp();
Restaurant.Collection.ExchangeRates.cacheCount('saleCount', Restaurant.Collection.Sales, 'exchangeRateId');
Restaurant.Collection.ExchangeRates.cacheCount('purchaseCount', Restaurant.Collection.Purchases, 'exchangeRateId');
Restaurant.Collection.ExchangeRates.cacheDoc('branch',Cpanel.Collection.Branch,['khName','enName']);