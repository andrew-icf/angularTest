angular
    .module('test')
    .controller('HomeController', HomeController);

function HomeController($scope){
    $scope.checked = false;

    $scope.toggle = function() {
        $scope.checked = !$scope.checked
    }

}