Restaurant.Collection.FIFOInventory.cacheTimestamp();
Restaurant.Collection.FIFOInventory.cacheDoc('product',Restaurant.Collection.Products,['name','_unit','_category']);
Restaurant.Collection.FIFOInventory.cacheDoc('branch',Cpanel.Collection.Branch,['khName','enName']);
Restaurant.Collection.FIFOInventory.cacheDoc('location',Restaurant.Collection.Locations,['name']);