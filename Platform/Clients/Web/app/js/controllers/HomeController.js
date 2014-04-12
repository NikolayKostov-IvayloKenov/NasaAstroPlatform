'use strict';

astroPlatform.controller('HomeController',
    function HomeController($scope, astroData) {
        $scope.users = astroData.users;
    }
);