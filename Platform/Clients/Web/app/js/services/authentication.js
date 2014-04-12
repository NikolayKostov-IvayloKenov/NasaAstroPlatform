'use strict';

astroPlatform.factory('authentication', function($resource ,$cookieStore, userSession) {

    var resource;
    var url = '/api/users/';
    var username = undefined;
    var isLogged = userSession.getSession() ? true : false;

    var register = function(user) {
        resource = $resource(url + '/register');
        resource.save(user, function(data) {
            username = user.username;
            isLogged = true;
            userSession.saveSession(data.sessionId);
        });
    }

    var login = function(user) {
        resource = $resource(url + '/login');
        resource.save(user, function(data) {
            username = user.username;
            isLogged = true;
            userSession.saveSession(data.sessionId);
        });
    }

    var logout = function() {
        var session = userSession.getSession();
        resource = $resource(url + '/logout?sessionId=' + session);
        resource.save(session, function() {
            username = undefined;
            isLogged = false;
            userSession.clearSession();
        })
    }

    return {
        register: register,
        login: login,
        logout: logout,
        username: username,
        isLogged: isLogged,
        currentSessionId: userSession.getSession()
    }
})