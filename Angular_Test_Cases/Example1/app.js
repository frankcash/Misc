var app = angular.module("app", []);

app.controller("AppCtrl", function($http){
  var app = this;
  $http.get("http://localhost:3000/users")
  .success(function(data){
    app.people=data;
  })

  app.addPerson = function(person){
    $http.post("http://localhost:3000/users", person)
    .success(function(data){
      app.people=data;
    })
  }
})
