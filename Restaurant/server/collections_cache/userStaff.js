Restaurant.Collection.UserStaffs.cacheTimestamp();
Restaurant.Collection.UserStaffs.cacheDoc('staff', Restaurant.Collection.Staffs, ['name']);
Restaurant.Collection.UserStaffs.cacheDoc('user', Meteor.users, ['username']);
Restaurant.Collection.UserStaffs.cacheDoc('branch',Cpanel.Collection.Branch,['khName','enName']);
