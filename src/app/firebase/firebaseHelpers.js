angular
    .module('jobney.angular-starter')
    .factory('firebaseRef', function(Firebase, FBURL) {
        /**
         * @function
         * @name firebaseRef
         * @param {String|Array...} path
         * @return a Firebase instance
         */
        return function(path) {
            return new Firebase(pathRef([FBURL].concat(Array.prototype.slice.call(arguments))));
        }
    })

    // a simple utility to create $firebase objects from angularFire
    .service('syncData', function($firebase, firebaseRef) {
        /**
         * @function
         * @name syncData
         * @param {String|Array...} path
         * @param {int} [limit]
         * @return a Firebase instance
         */
        return function(path, limit) {
            var ref = firebaseRef(path);
            limit && (ref = ref.limit(limit));
            return $firebase(ref);
        }
    })