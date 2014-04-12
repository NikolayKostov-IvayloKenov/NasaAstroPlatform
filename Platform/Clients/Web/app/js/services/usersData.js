'use strict';

astroPlatform.factory('usersData', function($resource, apiUrl) {

    var resource = $resource(apiUrl + '/users');

    return {
        users: resource.query()
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
