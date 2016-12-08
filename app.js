angular
    .module("test", ["dndLists", "ui.router", "pageslide-directive"])
    .config(config);

function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('multi', {
            url: '/',
            controller: 'DndController',
            templateUrl: 'app/views/dragNdrop.html'
        });
        // .state('pageSlide', {
        //    url: '/',
        //     controller: 'PageSlideController',
        //     templateUrl: 'app/views/pageSlide.html'
        // });
}