export default HomeController;

HomeController.$inject = ['$scope'];
function HomeController ($scope) {

    var vm = this;

    vm.title = 'Home Controller';
    $scope.testProp = 'true';

    activate();

    ////////////////

    function activate() {
        console.log('activating ' + vm.title);
        vm.activeReturns = 'something';
    }

    vm.getBoards = function () {
        console.log('getting data');
    };
}

