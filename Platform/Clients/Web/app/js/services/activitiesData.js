'use strict';

astroPlatform.factory('activitiesData', function($resource, apiUrl) {
    //resource = $resource(apiUrl + '/activities');
    var resource = [{
        id: 1,
        type: "image",
        title: "We are getting ready!",
        content: "/img/activities/gettingStarted_small.jpg",
        contentLarge: "/img/activities/gettingStarted_Large.jpg",
        createdOn: new Date(2014, 3, 12, 12, 16, 53, 111).toLocaleString()
    },{
        id: 2,
        type: "text",
        title: "New Satellite in space",
        content: "We sent a new satellite in space today and everything was as smooth as we expected!",
        createdOn: new Date(2014, 3, 12, 13, 46, 28, 111).toLocaleString()
    },{
        id: 3,
        type: "image",
        title: "A view from the cockpit",
        content: "/img/activities/viewFromCockpit_small.jpg",
        contentLarge: "/img/activities/viewFromCockpit_large.jpg",
        createdOn: new Date(2014, 3, 12, 17, 6, 8, 111).toLocaleString()
    },{
        id: 4,
        type: "image",
        title: "A view form the cupola",
        content: "/img/activities/viewFromCupola_small.jpg",
        contentLarge: "/img/activities/viewFromCupola_large.jpg",
        createdOn: new Date(2014, 3, 13, 9, 16, 18, 111).toLocaleString()
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