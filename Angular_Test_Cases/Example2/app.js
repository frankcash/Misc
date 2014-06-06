var app = angular.module("app", []);

app.controller("AppCtrl", function($http){
  var app = this;
  $http.get("http://localhost:3000/scrape")
  .success(function(data){
    app.posts=data;
  })

})
