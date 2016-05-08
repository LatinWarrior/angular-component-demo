(function() {

    'use strict';

    describe('Directive: people', function() {
        var element,
            vm;

        // Require modules and inject dependencies.
        beforeEach(function() {
            bard.appModule('app.components.people');
            bard.inject(
                '$compile',
                '$rootScope',
                '$templateCache',
                'logger',
                '$log'
            );
        });

        // Create our directive.
        beforeEach(function() {
            var html = angular.element('<people></people>');

            // Get new instance of scope.
            $rootScope = $rootScope.$new();
            $templateCache.put('app/components/people/people.html', '');
            element = $compile(html)($rootScope);

            // Wait for directive to be created.
            $rootScope.$digest(element);

            vm = element.controller('people');
        });

        // Make sure that all external calls are mocked.
        bard.verifyNoOutstandingHttpRequests();

        it('successfully creates the directive', function() {
            expect(element).to.be.defined;
            expect(vm).to.be.defined;
        });

        describe('after clickPerson', function() {

            // arrange
            // Any variables to create or pass in.
            var person = {
                name: 'Bob Smith'
            };

            it('', function() {
                // act
                vm.clickPerson(person);
                $rootScope.$apply();

                // assert
                expect($log.info.logs).to.match(/Bob Smith/);

            });
        });
    });

}());