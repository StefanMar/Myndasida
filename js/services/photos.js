app.factory('photos', ['$http', function($http) {
  return $http.get('mockup.json')
            .success(function(data) {
              console.log("kk")
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
