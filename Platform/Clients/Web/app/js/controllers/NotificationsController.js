'use strict'

astroPlatform.controller('NotificationsController',
    function NotificationsController($scope, notificationsData) {

        $scope.notifications = [];
        $scope.sort = '-1';

        notificationsData.onNew = function(evt) {
            var notification = evt.data;
            $scope.$apply(function(){
                $scope.notifications.push(notification);
            })
        }

    }
);