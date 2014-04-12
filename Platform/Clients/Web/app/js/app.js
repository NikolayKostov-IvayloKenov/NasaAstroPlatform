'use strict';

var astroPlatform = angular
    .module('astroPlatform', ['ngResource', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/register', {
                templateUrl: 'templates/register.html'
            })
            .when('/login', {
                templateUrl: 'templates/login.html'
            })
            .when('/users', {
                templateUrl: 'templates/users.html'
            })
            .when('/notifications', {
                templateUrl: 'templates/notifications.html'
            })
            .otherwise({redirectTo: '/users'});
    })
    .constant('author', 'Team Titan')