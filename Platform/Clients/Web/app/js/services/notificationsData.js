'use strict'

astroPlatform.factory('notificationsData', function($resource, apiUrl) {

    var notificationSocket = new WebSocket('ws://localhost:8080');

    return {
        socket: notificationSocket
    }
})