'use strict';

astroPlatform.factory('authentication', function($resource ,$cookieStore, $location, userSession, apiUrl) {

    var resource;
    var url = apiUrl + '/users';
    var username = undefined;
    var isLogged = userSession.getSession() ? true : false;

    var register = function(user) {
        resource = $resource(url + '/register');
        resource.save(user, function(data) {
            username = user.username;
            isLogged = true;
            userSession.saveSession(data.sessionId);
            $location.path('/users/' + user.username);
        });
    }

    var login = function(user) {
        resource = $resource(url + '/login');
        resource.save(user, function(data) {
            username = user.username;
            isLogged = true;
            userSession.saveSession(data.sessionId);
            $location.path('/users/' + user.username);
        });
    }

    var logout = function() {
        var session = userSession.getSession();
        resource = $resource(url + '/logout?sessionId=' + session);
        resource.save(session, function() {
            username = undefined;
            isLogged = false;
            userSession.clearSession();
            $location.path('/users');
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