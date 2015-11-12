app.factory('photos', ['$http', function($http) {
  console.log(33)
  return $http.get('mockup.html')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              console.log(err)
              return err;
            });
}]);
