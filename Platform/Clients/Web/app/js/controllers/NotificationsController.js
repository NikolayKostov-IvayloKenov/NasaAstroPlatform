'use strict'

astroPlatform.controller('NotificationsController',
    function NotificationsController($scope, $resource, $cookieStore, apiUrl, notificationsData) {

        $scope.notifications = [];

        //if ($cookieStore.get('notifications')) {
        //    $scope.notifications = JSON.parse($cookieStore.get('notifications'));
        //}

        $scope.sort = '-id';

        $scope.send = function(message, sendMessageForm) {
            if (sendMessageForm.$valid) {
                var resource = $resource(apiUrl + '/activities');
                resource.save(message);
            }
        }

        notificationsData.socket.onmessage = function(evt) {
            var notification = JSON.parse(evt.data);
            $scope.$apply(function(){
                $scope.notifications.push(notification);
            })
            $cookieStore.put('notifications', JSON.stringify($scope.notifications));
        }

    }
);