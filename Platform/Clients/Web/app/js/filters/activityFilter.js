'use strict';

astroPlatform.filter('activity', function() {
    return function(input) {
        if (input) {
            return "online";
        }
        else {
            return "offline";
        }
    }
});
