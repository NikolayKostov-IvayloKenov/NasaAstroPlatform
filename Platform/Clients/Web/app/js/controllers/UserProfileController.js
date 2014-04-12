'use strict';

astroPlatform.controller('UserProfileController',
    function UserProfileController($scope, userProfileData, $routeParams) {
        $scope.userData = userProfileData.getUserData($routeParams.username);
    }
);