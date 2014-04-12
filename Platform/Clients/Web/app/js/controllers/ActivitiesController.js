'use strict'

astroPlatform.controller('ActivitiesController',
    function ActivitiesController($scope, activitiesData) {
        $scope.activities = activitiesData.getAllActivities();
    }
);