Pos.Collection.Tables.cacheTimestamp();
Pos.Collection.Tables.cacheCount('saleCount', Pos.Collection.Sales, 'tableId');
Pos.Collection.Tables.cacheDoc('tableLocation',Pos.Collection.TableLocations,['name']);
Pos.Collection.Tables.cacheDoc('branch',Cpanel.Collection.Branch,['khName','enName']);