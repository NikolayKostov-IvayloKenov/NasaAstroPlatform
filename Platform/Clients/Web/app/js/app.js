'use strict';

var astroPlatform = angular
    .module('astroPlatform', ['ngResource', 'ngRoute', 'ngCookies'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/users.html'
            })
            .when('/register', {
                templateUrl: 'templates/register.html'
            })
            .when('/login', {
                templateUrl: 'templates/login.html'
            })
            .when('/astronauts', {
                templateUrl: 'templates/users.html'
            })
            .when('/astronauts/:username', {
                templateUrl: 'templates/users/profile.html'
            })
            .when('/notifications', {
                templateUrl: 'templates/notifications.html'
            })
            .when('/activities', {
                templateUrl: 'templates/activities/activities.html'
            })
            .when('/activities/details/:id/:title', {
                templateUrl: 'templates/activities/activityDetails.html'
            })
            .otherwise({redirectTo: '/astronauts'});
    })
    .constant('author', 'Team Titan')
    .constant('apiUrl', 'http://localhost:8080')
