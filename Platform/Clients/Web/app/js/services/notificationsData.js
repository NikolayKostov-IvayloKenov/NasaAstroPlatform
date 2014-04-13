'use strict'

astroPlatform.factory('notificationsData', function($resource, apiUrl) {

    var notificationSocket = new WebSocket('ws://79.124.67.13:8080'); // new WebSocket('ws://localhost:8080');

    return {
        socket: notificationSocket
    }
})