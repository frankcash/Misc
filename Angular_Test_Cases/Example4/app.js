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
  .controller('FrankController', ['$scope', function($scope){
    $scope.frank = {
      name : 'Frank',
      address: '1801 Github'
    };

  }])
  .directive('myCustomer', function(){
    return{
      restrict: 'E',

      templateUrl: 'my-customer.html'
    };
  });
