var app = angular.module('MyndaApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "MainController",
      templateUrl: "views/homepage.html"
    })
    .when('/map/:id', {
      controller: 'LoginController',
      templateUrl: 'views/map.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
