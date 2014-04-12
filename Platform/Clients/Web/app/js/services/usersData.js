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


astroPlatform.factory('userProfileData', function($resource) {

    var resource = $resource('/api/users/:username', { username: '@username' });

    return {
        getUserData: function(username) {
            var user = {
                id: 1,
                username: 'armstrong',
                name: 'Neil Armstrong',
                status: true,
                imageUrl: '/img/profile.png',
                activities: [{
                    type: "image",
                    description: "Test image",
                    content: "http://gallery.artofgregmartin.com/tuts_arts/planet_images/planet_01.jpg",
                    dateCreated: new Date(Date.now())
                },{
                    type: "text",
                    description: "Test text",
                    content: "This is a test text",
                    dateCreated: new Date(Date.now())
                }]
            };

            return user;
        }
    }
})