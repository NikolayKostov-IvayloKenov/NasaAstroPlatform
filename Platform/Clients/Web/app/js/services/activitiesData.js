'use strict';

astroPlatform.factory('activitiesData', function($resource, apiUrl) {

    var resource = $resource(apiUrl + '/activities');

    return { allActivities: [{
        type: "image",
        title: "We are getting ready!",
        content: "/img/activities/gettingStarted_small.jpg",
        createdOn: new Date(Date.now())
    },{
        type: "text",
        title: "New Satellite in space",
        content: "We sent a new satellite in space today and everything was as smooth as we expected!",
        createdOn: new Date(Date.now())
    },{
        type: "image",
        title: "A view from the cockpit",
        content: "/img/activities/viewFromCockpit_small.jpg",
        createdOn: new Date(Date.now())
    },{
        type: "image",
        title: "A view form the cupola",
        content: "/img/activities/viewFromCupola_small.jpg",
        createdOn: new Date(Date.now())
    }]};
})


astroPlatform.factory('userActivitiesData', function($resource) {

    var resource = $resource('/api/:username/activities', { username: '@username' });

    return {
        getUserActivitiesData: function(username) {
            var activities = [{
                type: "image",
                title: "We are getting ready!",
                content: "/img/activities/gettingStarted_small.jpg",
                createdOn: new Date(Date.now())
            },{
                type: "image",
                title: "A view form the cupola",
                content: "/img/activities/viewFromCupola_small.jpg",
                createdOn: new Date(Date.now())
            }];

            return activities;
        }
    }
})
