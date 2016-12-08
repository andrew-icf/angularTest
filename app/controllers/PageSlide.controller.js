angular
    .module('test')
    .controller('PageSlideController', PageSlideController);

function PageSlideController($scope) {

    $scope.checked = false;

    $scope.toggle = function() {
        $scope.checked = !$scope.checked
    }
}
