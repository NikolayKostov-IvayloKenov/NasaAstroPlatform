'use strict';

astroPlatform.factory('usersData', function($resource) {

    var resource = $resource('/api/users/');

    var users = [{
        id: 1,
        username: 'hansen',
        name: 'Jeremy Hansen',
        active: false,
        imageUrl: '/img/hansen.jpg',
        notifications: 0,
        wearables: []
    },{
        id: 2,
        username: 'wiseman',
        name: 'Gregory Wiseman',
        active: true,
        imageUrl: '/img/wiseman.jpg',
        notifications: 0,
        wearables: []
    },{
        id: 3,
        username: 'rubins',
        name: 'Kathleen Rubins',
        active: true,
        imageUrl: '/img/rubins.jpg',
        notifications: 0,
        wearables: []
    }];

    return {
        users: users
    }
})
