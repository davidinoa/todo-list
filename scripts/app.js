angular.module('todoListApp', [])
  .controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
      console.log('Hello there! This is the helloWorld controller function, in the mainCtrl!');
    };

    $scope.todos = [
      {name: 'clean the house'},
      {name: 'water the dog'},
      {name: 'feed the lawn'},
      {name: 'pay bills'},
      {name: 'swim'},
      {name: 'run'}
    ];
    
  });