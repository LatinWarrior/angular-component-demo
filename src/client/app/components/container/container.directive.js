(function() {

    'use strict';

    angular
        .module('app.components.container')
        .directive('container', containerDirective);

    function containerDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/container/container.html',
            scope: {
                title: '@',
                color: '@'
            },
            controller: ContainerController,
            controllerAs: 'vm',
            bindToController: true,
            transclude: true
        };
    }

    //ContainerController.$inject = [''];

    function ContainerController() {

        var vm = this;        

        vm.wColor = 'w' + vm.color;            
    }

})();