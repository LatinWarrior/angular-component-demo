/* jshint -W117, -W030 */
describe('dashboard routes', function () {
    describe('state', function () {
        var view = 'app/features/dashboard/dashboard.html';
        var people = mockData.getMockPeople();

        beforeEach(function() {
            module('app.features.dashboard', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache', '$q', 'dataservice');

        });

        beforeEach(function() {
            $templateCache.put(view, '');
            sinon.stub(dataservice, 'getPeople').returns($q.when(people));
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state dashboard to url / ', function() {
            expect($state.href('dashboard', {})).to.equal('/');
        });

        it('should map /dashboard route to dashboard View template', function () {
            expect($state.get('dashboard').templateUrl).to.equal(view);
        });

        it('of dashboard should work with $state.go', function () {
            $state.go('dashboard');
            $rootScope.$apply();
            expect($state.is('dashboard'));
        });
    });
});
