'use strict';

astroPlatform.controller('AuthenticationController', function($scope, authentication) {
    $scope.isLogged = authentication.isLogged;

    $scope.register = function(user, registrationForm) {
        if (registrationForm.$valid) {
            authentication.register(user);
        }
    }

    $scope.login = function(user, loginForm) {
        if (loginForm.$valid) {
            authentication.login(user);
        }
    }

    $scope.logout = function() {
        authentication.logout();
    }
})