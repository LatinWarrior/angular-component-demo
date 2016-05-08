(function() {
    'use strict';

    angular
        .module('app.features.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'messageCount', 'people', 'news', 'logger'];
    /* @ngInject */
    function DashboardController($q, messageCount, people, news, logger) {

        var vm = this;
        
        vm.messageCount = messageCount;
        //vm.people = [];
        vm.title = 'Barcelona';
        vm.date = new Date();
        vm.people = people;
        vm.news = news;
        vm.title = 'Dashboard';
        vm.activate = activate;

        activate();

        function activate() {
            logger.info('Activated Dashboard View');
            // var promises = [getMessageCount()];
            // return $q.all(promises).then(function() {
            //     logger.info('Activated Dashboard View');
            // });
        }

        // function getDate() {
        //     return vm.date;
        // }

        // function getMessageCount() {
        //     return dataservice.getMessageCount().then(function(data) {
        //         vm.messageCount = data;
        //         return vm.messageCount;
        //     });
        // }

        
    }
})();