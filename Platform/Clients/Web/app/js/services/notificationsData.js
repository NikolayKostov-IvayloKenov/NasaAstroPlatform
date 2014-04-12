'use strict'

astroPlatform.factory('notificationsData', function($resource, apiUrl) {

    var notificationSocket;

    if ("WebSocket" in window) {
        notificationSocket = new WebSocket('ws://' + apiUrl);
    }

    return {
        onNew: notificationSocket.onmessage,
        onOpen: notificationSocket.onopen,
        onClose: notificationSocket.onclose
    }
})