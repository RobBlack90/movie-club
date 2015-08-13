(function (angular) {
    'use strict';

    angular
        .module('movieClub')
        .controller('DashboardController', DashboardController);

    function DashboardController(currentMovie, properties, users, movieInfo) {
        var vm = this;
        vm.currentMovie = currentMovie;
        vm.properties = properties;
        vm.usernames = _.pluck(users, 'username');
        movieInfo.get(currentMovie.name).then(function (response) {
            vm.movieInfo = response.data;
        });
    }

}(window.angular));
