app.controller('MainController', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    $scope.myndir = data;
  });
}]);
