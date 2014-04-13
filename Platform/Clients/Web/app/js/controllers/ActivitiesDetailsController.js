'use strict';

astroPlatform.controller('ActivityDetailsController',
    function ArtistDetailsController($scope, $routeParams, $location, activitiesData) {
        $scope.activity = activitiesData.getActivity($routeParams.id);
    }
);