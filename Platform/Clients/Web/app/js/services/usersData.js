'use strict';

astroPlatform.factory('usersData', function($resource, apiUrl) {

    var resource = $resource(apiUrl + '/users');

    return {
        users: resource.query()
    }
})
