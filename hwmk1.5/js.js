angular.module('myApp', [])
.controller('MainController', function($scope, $filter) {
  $scope.plainPhrase = 'HELLO, TEST';
  $scope.filterPhrase = $filter('lowercase')($scope.plainPhrase);
});