'use strict';

astroPlatform.controller('AuthenticationController', function($scope, $location, authentication) {
    $scope.isLogged = authentication.isLogged;
    $scope.username;

    $scope.registerUser = function(user, registrationForm) {
        if (registrationForm.$valid) {
            $scope.isLogged = true;
            $scope.username = user.username;
            $location.path('/astronauts');
            //authentication.register(user);
        }
    }

    $scope.loginUser = function(user, loginForm) {
        if (loginForm.$valid) {
           $scope.isLogged = true;
           $scope.username = user.username;
           $location.path('/astronauts');
           // authentication.login(user);
        }
    }

    $scope.logout = function() {
        $scope.isLogged = false;
        $scope.username = null;
        // authentication.logout();
    }
})