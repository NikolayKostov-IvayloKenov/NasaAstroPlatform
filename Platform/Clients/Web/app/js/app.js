'use strict';

var astroPlatform = angular
    .module('astroPlatform', ['ngResource', 'ngRoute', 'ngCookies'])
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
            .when('/users/:username', {
                templateUrl: 'templates/users/profile.html'
            })
            .when('/notifications', {
                templateUrl: 'templates/notifications.html'
            })
            .otherwise({redirectTo: '/users'});
    })
    .constant('author', 'Team Titan')
    .constant('apiUrl', 'http://localhost:8080')
