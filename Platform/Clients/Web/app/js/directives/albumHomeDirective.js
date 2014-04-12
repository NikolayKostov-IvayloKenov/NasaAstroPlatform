'use strict';

astroPlatform.directive('albumHomeDirective', function() {
    return {
        restrict: 'A',
        templateUrl: 'templates/directives/album-home-directive.html',
        scope: {
            album: '='
        }
    }
})