(function() {
    'use strict';

    angular
        .module('app.features.customers')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'customers',
                config: {
                    url: '/customers',
                    templateUrl: 'app/features/customers/customers.html',
                    controller: 'CustomersController',
                    controllerAs: 'vm',
                    title: 'Customers',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Customers'
                    }
                }
            }
        ];
    }
})();
