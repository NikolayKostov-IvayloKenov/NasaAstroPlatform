'use strict';

var astroPlatform = angular
    .module('astroPlatform', ['ngResource', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/users', {
                templateUrl: 'templates/users.html'
            })
            .otherwise({redirectTo: '/users'});
    })
    .constant('author', 'Team Titan')