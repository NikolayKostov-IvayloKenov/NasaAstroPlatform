'use strict';

astroPlatform.directive('activityDetailsDirective', function() {
    return {
        restrict: 'A',
        templateUrl: 'templates/directives/activity-details-directive.html',
        scope: {
            activity: "=activity"
        }
    }
})