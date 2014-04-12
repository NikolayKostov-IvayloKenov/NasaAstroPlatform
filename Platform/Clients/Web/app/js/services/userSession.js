'use strict';

astroPlatform.factory('userSession', function($cookieStore) {

    var key = 'userSessionId';

    function getSessionId() {
        return $cookieStore.get(key);
    }

    function saveSessionId(sessionId) {
        $cookieStore.put(key, sessionId)
    }

    function clearSessionId() {
        $cookieStore.remove(key);
    }

    return {
        getSession: getSessionId,
        saveSession: saveSessionId,
        clearSession: clearSessionId
    }

})