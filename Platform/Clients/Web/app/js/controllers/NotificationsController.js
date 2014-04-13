'use strict'

astroPlatform.controller('NotificationsController',
    function NotificationsController($scope, $cookieStore, notificationsData) {

        $scope.notifications = [];

        if ($cookieStore.get('notifications')) {
            $scope.notifications = JSON.parse($cookieStore.get('notifications'));
        }

        $scope.sort = '-id';

        notificationsData.socket.onmessage = function(evt) {
            var notification = JSON.parse(evt.data);
            $scope.$apply(function(){
                $scope.notifications.push(notification);
            })
            $cookieStore.put('notifications', JSON.stringify($scope.notifications));
        }

    }
);