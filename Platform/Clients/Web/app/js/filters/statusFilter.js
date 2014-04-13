'use strict';

astroPlatform.filter('status', function() {
    return function(input) {
        if (input) {
            return "Online";
        }
        else {
            return "Offline";
        }
    }
});
