var app = angular.module('MyndaApp', ['ngRoute']);
console.log("app.js")
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "MainController",
      templateUrl: "views/homepage.html"
    })
    .when('LINKFYRIRLOGINDOITLATERYOUSEXYBABES', {
      controller: 'LoginController',
      templateUrl: 'views/login.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
