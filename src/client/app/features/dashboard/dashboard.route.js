(function() {

    'use strict';

    angular
        .module('app.features.dashboard')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/',
                    templateUrl: 'app/features/dashboard/dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    title: 'Barcelona',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    },
                    resolve: {
                        messageCount: messageCount,
                        people: people,
                        news: news
                    }
                }
            }
        ];

        messageCount.$inject = ['dataservice'];
        /* @ngInject */
        function messageCount(dataservice){
            return dataservice.getMessageCount();
        }

        people.$inject = ['dataservice'];
        /* @ngInject */
        function people(dataservice){
            return dataservice.getPeople();
        }
        
        function news(){
            return {
                title: 'Components in Angular 1.5',
                description: 'Angular 1.5 Rocks.'
            };
        }
    }
})();
