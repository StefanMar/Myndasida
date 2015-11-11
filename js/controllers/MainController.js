app.controller('MainController', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    console.log("ss");
    $scope.myndir = data;
  });
}]);
