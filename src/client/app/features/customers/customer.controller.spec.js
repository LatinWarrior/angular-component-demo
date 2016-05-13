(function() {

    'use strict';

    describe('CustomerController', function() {

        var controller;
        var customers = mockData.getMockCustomers();

        beforeEach(function() {
            bard.appModule('app.features.customers');
            bard.inject('$controller', '$log', '$q', '$rootScope', 'dataService');
        });

        it('hello test', function() {
            expect('hello').to.equal('hello');
        });
    });
    
})();