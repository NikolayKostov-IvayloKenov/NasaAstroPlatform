'use strict';

astroPlatform.filter('status', function() {
    return function(input) {
        if (input) {
            return "online";
        }
        else {
            return "offline";
        }
    }
});
