'use strict';

astroPlatform.factory('activitiesData', function($resource, apiUrl) {
    //resource = $resource(apiUrl + '/activities');
    var resource = [{
        id: 1,
        type: "image",
        title: "We are getting ready!",
        content: "/img/activities/gettingStarted",
        createdOn: new Date(Date.now())
    },{
        id: 2,
        type: "text",
        title: "New Satellite in space",
        content: "We sent a new satellite in space today and everything was as smooth as we expected!",
        createdOn: new Date(Date.now())
    },{
        id: 3,
        type: "image",
        title: "A view from the cockpit",
        content: "/img/activities/viewFromCockpit",
        createdOn: new Date(Date.now())
    },{
        id: 4,
        type: "image",
        title: "A view form the cupola",
        content: "/img/activities/viewFromCupola",
        createdOn: new Date(Date.now())
    }];

    return {
        getActivity: function(id) {
            return resource[id - 1];
        },
        getAllActivities: function() {
            return resource;
        }
    }
})

astroPlatform.factory('userActivitiesData', function($resource) {
    var resource = $resource('/api/:username/activities', { username: '@username' });

    return {
        getUserActivitiesData: function(username) {
            var activities = [{
                id: 3,
                type: "image",
                title: "We are getting ready!",
                content: "/img/activities/gettingStarted",
                createdOn: new Date(Date.now())
            },{
                id: 4,
                type: "image",
                title: "A view form the cupola",
                content: "/img/activities/viewFromCupola",
                createdOn: new Date(Date.now())
            }];

            return activities;
        }
    }
})