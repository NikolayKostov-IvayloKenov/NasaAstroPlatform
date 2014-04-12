'use strict'

astroPlatform.controller('NotificationsController',
    function NotificationsController($scope, notificationsData) {

        $scope.notifications = [];
        $scope.sort = '-1';

        notificationsData.onNew = function(evt) {
            console.log(evt);
            var notification = evt.data;
            $scope.$apply(function(){
                $scope.notifications.push(notification);
            })
        }

    }
);