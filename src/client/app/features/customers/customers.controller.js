(function () {
    
    'use strict';

    angular
        .module('app.features.customers')
        .controller('CustomersController', CustomersController);

    CustomersController.$inject = ['logger'];
    /* @ngInject */
    function CustomersController(logger) {
        var vm = this;
        vm.title = 'Customers';

        activate();

        function activate() {
            logger.info('Activated Customers View');
        }
    }
})();
