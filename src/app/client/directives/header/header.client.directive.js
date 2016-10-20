import template from './header.client.tpl.html';

headerClient.$inject = [];

export default function headerClient() {
    var directive = {
        restrict: 'E',
        template: template,
        link: link,
        controller: headerController,
        controllerAs: 'vm',
        scope: true
    };

    // headerController.call($scope['header'])
    headerController.$inject = ['$scope'];


    function headerController ($scope) {
        var vm = this;
        //
        vm.title = $scope.title;
        console.log('visible from the directive', $scope.inheritToChilds);
    }

    return directive;

    function link() {}
}