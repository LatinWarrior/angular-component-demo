(function() {

    'use strict';

    angular
        .module('app.components.news')
        .directive('news', newsDirective);

    function newsDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/news/news.html',
            scope: {},
            controller: NewsController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    //NewsController.$inject = [''];

    function NewsController() {

        var vm = this;        

        vm.news = {
            title: 'Components in Angular 1.5',
            description: 'Angular 1.5 Rocks.'
        };           
    }

})();