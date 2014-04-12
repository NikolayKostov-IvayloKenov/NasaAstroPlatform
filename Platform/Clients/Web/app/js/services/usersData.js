'use strict';

astroPlatform.factory('usersData', function($resource, apiUrl) {

    var resource = $resource(apiUrl + '/astronauts');

    return {
        users: resource.query()
    }
})


astroPlatform.factory('userProfileData', function($resource) {

    var resource = $resource('/api/astronauts/:username', { username: '@username' });

    return {
        getUserData: function(username) {
            var user = {
                id: 1,
                username: 'hansen',
                name: 'Jeremy Hansen',
                status: true,
                imageUrl: '/img/hansen.jpg',
                activities: [{
                    type: "text",
                    title: "New Satellite in space",
                    content: "We sent a new satellite in space today and everything was as smooth as we expected!",
                    createdOn: new Date(Date.now())
                },{
                    type: "image",
                    title: "A view form the cupola",
                    content: "/img/activities/viewFromCupola_small.jpg",
                    createdOn: new Date(Date.now())
                }]
            };

            return user;
        }
    }
})
