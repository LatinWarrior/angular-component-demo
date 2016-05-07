module.exports = {
    people: getPeople()
};

function getPeople() {
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