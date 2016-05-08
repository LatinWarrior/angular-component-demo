(function() {
    'use strict';

    angular
        .module('app.features.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger) {
        var vm = this;
        
        vm.messageCount = 0;
        //vm.people = [];
        vm.title = 'Barcelona';
        vm.date = new Date();

        activate();

        function activate() {
            var promises = [getMessageCount()];
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getDate() {
            return vm.date;
        }

        function getMessageCount() {
            return dataservice.getMessageCount().then(function(data) {
                vm.messageCount = data;
                return vm.messageCount;
            });
        }

        
    }
})();