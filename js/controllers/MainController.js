angular
  .module("lbApp")
  .controller('MainController', ['$scope',
  function($scope) {
    $scope.greeting = 'Hola!';
  }]);
