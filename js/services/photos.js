app.factory('photos', ['$http', function($http) {
  return $http.get('mockup.html')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
