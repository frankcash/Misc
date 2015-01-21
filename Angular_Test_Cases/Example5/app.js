angular.module('docsRestrictDirective', [])
.controller('Controller', ['$scope', function($scope){



  $scope.customers =
    [
        {name: 'naomi', address: '1600 ampitheather'},
        {name: 'igor', address: '1201 Somewhere'}
    ];
console.log($scope.customers);


}])
.directive('myCustomer', function(){
  return{
    restrict: 'E',
    templateUrl: 'my-customer.html'
  };
});
