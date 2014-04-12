'use strict'

astroPlatform.factory('notificationsData', function($resource) {

    var notificationSocket;

    if ("WebSocket" in window) {
        notificationSocket = new WebSocket('ws://');
    }

    return {
        onNew: notificationSocket.onmessage
    }
})