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
                    id: 2,
                    type: "text",
                    title: "New Satellite in space",
                    content: "We sent a new satellite in space today and everything was as smooth as we expected!",
                    createdOn: new Date(2014, 3, 12, 12, 16, 53, 111).toLocaleString()
                },{
                    id: 4,
                    type: "image",
                    title: "A view form the cupola",
                    content: "/img/activities/viewFromCupola_small.jpg",
                    createdOn: new Date(2014, 3, 13, 9, 16, 18, 111).toLocaleString()
                }]
            };

            return user;
        }
    }
})
