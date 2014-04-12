'use strict';

astroPlatform.filter('userSpaceBreak', function() {
    return function(input) {
       return input.replace(" ", " ");
    }
});
