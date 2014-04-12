'use strict';

var astroPlatform = angular
    .module('astroPlatform', ['ngResource', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'templates/home.html'
            })
            .otherwise({redirectTo: '/home'});
    })
    .constant('author', 'Team Titan')