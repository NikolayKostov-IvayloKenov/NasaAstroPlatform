'use strict';

astroPlatform.directive('activityListItemDirective', function() {
    return {
        restrict: 'A',
        templateUrl: 'templates/directives/activity-list-item-directive.html',
        scope: {
            activity: "=activity"
        }
    }
})