'use strict';

astroPlatform.controller('ActivityDetailsController',
    function ArtistDetailsController($scope, $routeParams, activitiesData) {
        var activity = activitiesData.getActivity($routeParams.id);
        activity.content += "_large.jpg";
        $scope.activity = activity;
    }
);