import 'angular';
import filterBy from './filter-by';
import filterByUP from './check.user.filter';

export default angular.module('app.filters', [filterBy, filterByUP]).name;