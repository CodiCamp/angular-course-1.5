export default ConfirmModalController;

ConfirmModalController.$inject = ['$scope'];

/* @ngInject */
function ConfirmModalController($scope) {

    $scope.completeAction = function () {
        $scope.show = false;
        $scope.action({
            item: $scope.item
        });
    }
}