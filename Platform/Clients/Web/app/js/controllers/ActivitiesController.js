'use strict'

astroPlatform.controller('ActivitiesController',
    function ActivitiesController($scope, activitiesData, $templateCache) {
        $templateCache.removeAll();
        var activities = activitiesData.getAllActivities();
        for (var i=0;i<activities.length;i++)
        {
            activities[i].content += "_small.jpg";
        }
        $scope.activities = activities;
    }
);