'use strict';

astroPlatform.factory('usersData', function($resource, apiUrl) {

    var resource = $resource(apiUrl + '/astronauts');

    return {
        users: resource.query()
    }
})


astroPlatform.factory('userProfileData', function($resource, apiUrl) {

    var resource = $resource(apiUrl + '/astronauts/:username', { username: '@username' });

    return {
        getUserData: function(username) {
            return resource.get({username: username});
        }
    }
})
