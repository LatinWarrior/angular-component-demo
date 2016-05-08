(function() {

    'use strict';

    angular
        .module('app.resolves', [])
        .constant('people', window.mockData.getMockPeople())
        .constant('messageCount', 73)
        .constant('news', {
            title: 'News title',
            description: 'News description'
        });

}());