(function (angular) {
    'use strict';

    angular
        .module('movieClub')
        .factory('movieInfo', movieInfo);

    function movieInfo($http) {
        var factory = {
            get: get
        };
        return factory;

        function get(movieName) {
            return $http.get('http://www.omdbapi.com/?t=' + movieName + '&tomatoes=true&plot=full');
        }
    }

}(window.angular));