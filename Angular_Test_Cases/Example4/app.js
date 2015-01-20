angular.module('docsRestrictDirective', [])
  .controller('Controller', ['$scope', function($scope){
    $scope.naomi = {
      name : 'Naomi',
      address: '1600 Amphiteather'
    };
    $scope.igor = {
      name: 'Igor',
      address: '1201 Somewhere'
    };
  }])
  .directive('myCustomer', function(){
    return{
      restrict: 'E',
      scope: { // scope options contains propery for each isolate scope binding
        customerInfo: '=info'
      },
      templateUrl: 'my-customer.html'
    };
  });
