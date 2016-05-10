(function() {

    'use strict';

    angular
        .module('app.components.users')
        .directive('users', usersDirective);

    function usersDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/users/users.html',
            scope: {
                users: '='
            },
            controller: UsersController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    UsersController.$inject = ['logger'];

    function UsersController(logger) {

        var vm = this;

        vm.clickUser = clickUser;

        function clickUser(user){
            logger.info(JSON.stringify(user));
        }

        //vm.people = [];
        //vm.getPeople = getPeople;        

        // function getPeople() {
        //     dataservice
        //         .getPeople()
        //         .then(function(data) {
        //             vm.people = data;
        //         });
        // }
    }

})();