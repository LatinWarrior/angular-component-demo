(function() {

    'use strict';

    angular
        .module('app.components.container')
        .directive('container', containerDirective);

    function containerDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/container/container.html',
            scope: {},
            controller: ContainerController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    //ContainerController.$inject = [''];

    function ContainerController() {

        var vm = this;        

        vm.news = {
            title: 'Components in Angular 1.5',
            description: 'Angular 1.5 Rocks.'
        };           
    }

})();