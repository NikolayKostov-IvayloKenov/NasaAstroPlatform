'use strict';

astroPlatform.controller('UsersController',
    function UsersController($scope, usersData) {
        $scope.users = usersData.users;
    }
);