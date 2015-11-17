var app = angular.module('MyndaApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "MainController",
      templateUrl: "views/homepage.html"
    })
    .when('/comments', {
      controller: 'CommentController',
      templateUrl: 'views/comment.html'
    })
    .when('LINKFYRIRLOGINDOITLATERYOUSEXYBABES', {
      controller: 'LoginController',
      templateUrl: 'views/login.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
