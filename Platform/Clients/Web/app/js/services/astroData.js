'use strict';

astroPlatform.factory('astroData', function($resource) {

    var resource = $resource('/api/users/');

    var users = [{
        id: 1,
        username: 'armstrong',
        name: 'Neil Armstrong',
        active: true,
        imageUrl: '/img/profile.png',
        notifications: 0,
        wearables: []
    },{
        id: 2,
        username: 'gagarin',
        name: 'Yuri Gagarin',
        active: true,
        imageUrl: '/img/profile.png',
        notifications: 0,
        wearables: []
    },{
        id: 3,
        username: 'collins',
        name: 'Michael Collins',
        active: false,
        imageUrl: '/img/profile.png',
        notifications: 0,
        wearables: []
    }];

    return {
        users: users
    }
})