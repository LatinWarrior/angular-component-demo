/* jshint -W079 */
var mockData = (function() {
    return {
        getMockPeople: getMockPeople,
        getMockStates: getMockStates
    };

    function getMockStates() {
        return [{
            state: 'dashboard',
            config: {
                url: '/',
                templateUrl: 'app/features/dashboard/dashboard.html',
                title: 'dashboard',
                settings: {
                    nav: 1,
                    content: '<i class="fa fa-dashboard"></i> Dashboard'
                }
            }
        }];
    }

    function getMockPeople() {
        return [{
            id: 1,
            firstName: 'Marc-André',
            lastName: 'Ter Stegen',
            age: 24,
            placeOfBirth: 'Mönchengladbach (Germany)',
            position: 'goalkeeper'
        }, {
            id: 2,
            firstName: 'Gerard',
            lastName: 'Piqué Bernabeu',
            age: 29,
            placeOfBirth: 'Barcelona (Spain)',
            position: 'defender'
        }, {
            id: 3,
            firstName: 'Luis Alberto',
            lastName: 'Suárez Díaz',
            age: 29,
            placeOfBirth: 'Salto (Uruguay)',
            position: 'forward'
        }, {
            id: 4,
            firstName: 'Lionel Andrés',
            lastName: 'Messi',
            age: 28,
            placeOfBirth: 'Rosario (Argentina)'
        }, {
            id: 5,
            firstName: 'Neymar da Silva',
            lastName: 'Santos Júnior',
            age: 24,
            placeOfBirth: 'Mogi das Cruzes, Sao Paulo (Brazil)',
            position: 'forward'
        }, {
            id: 6,
            firstName: 'Jérémy',
            lastName: 'Mathieu',
            age: 33,
            placeOfBirth: 'Luxeuil-les-Bains (France)',
            position: 'defender'
        }, {
            id: 7,
            firstName: 'Thomas',
            lastName: 'Vermaelen',
            age: 31,
            placeOfBirth: 'Kapellen (Belgium)',
            position: 'defender'
        }, {
            id: 8,
            firstName: 'Aleix',
            lastName: ' Vidal Parreu',
            age: 27,
            placeOfBirth: 'Puigpelat (Tarragona)',
            position: 'wing-back'
        }];
    }

    // function getMockPeople() {
    //     return [
    //         {firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida'},
    //         {firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California'},
    //         {firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York'},
    //         {firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota'},
    //         {firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota'},
    //         {firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina'},
    //         {firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming'}
    //     ];
    // }
})();