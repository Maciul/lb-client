angular
  .module("lbApp")
  .controller('MainController', ['$scope', '$http', '$q',
  function($scope, $http, $q) {
    $scope.greeting = 'Hola!';
    $scope.date = {};
    $scope.issues = [];

// Set date for API calls that will get all posts starting with a week ago from current date.

    (function getDynamicDate() {
      var d = new Date();
      d.setDate(d.getDate()-6);
      $scope.date = d.toISOString().slice(0, 10);
      console.log($scope.date)
      console.log(d)
    }());

// Set up apiCalls with 2 calls for overflow over a 100 in a week

    var apiCalls = [
      $http.get('https://api.github.com/search/issues?q=repo:angular/angular+type:issue+created:>'+$scope.date+'&page=1&per_page=100'),
      $http.get('https://api.github.com/search/issues?q=repo:angular/angular+type:issue+created:>'+$scope.date+'&page=2&per_page=100')
    ];

// Make http request

    $q.all(apiCalls).then(function(data) {
      data = data[0].data.items.concat(data[1].data.items);
      $scope.issues = data;
      console.log(data)
    });

  }]);
