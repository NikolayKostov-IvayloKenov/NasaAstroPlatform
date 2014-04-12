'use strict'

astroPlatform.controller('NotificationsController',
    function NotificationsController($scope, notificationsData) {

        $scope.notifications = [];
        $scope.sort = '-id';

        notificationsData.socket.onmessage = function(evt) {
            var notification = JSON.parse(evt.data);
            $scope.$apply(function(){
                $scope.notifications.push(notification);
            })
        }

    }
);