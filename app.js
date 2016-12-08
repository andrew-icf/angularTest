angular
    .module("test", ["pageslide-directive", "ui.router"])
    .config(config);

function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'app/views/home.html'
        });
}