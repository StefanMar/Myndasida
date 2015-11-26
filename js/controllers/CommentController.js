app.controller('CommentController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
    $scope.mynd  = data.photos[$routeParams.id];
  });
}]);
