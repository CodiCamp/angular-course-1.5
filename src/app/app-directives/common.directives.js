import 'angular';

import footer from './footer/footer.directive';

var commonDepends = [];

export default angular
                    .module('common.directives', commonDepends)
                    .directive('footer', footer)
                    .name;