(function() {

    'use strict';

    angular
        .module('app.components.people')
        .directive('people', peopleDirective);

    function peopleDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/people/people.html',
            scope: {
                people: '='
            },
            controller: PeopleController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    PeopleController.$inject = ['logger'];

    function PeopleController(logger) {

        var vm = this;

        vm.clickPerson = clickPerson;

        function clickPerson(person){
            logger.info(JSON.stringify(person));
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