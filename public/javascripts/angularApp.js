angular.module('clusterApp', [])
.controller('MainCtrl', [
  '$scope', '$http',
  function($scope, $http){
    $scope.getMyPIDs = function() {
      $scope.cluster = [];
      for(i = 0; i < 100; i++){
        $http.post('/pid').success(function(data){
          console.log("getAll");
          console.log(data);
          $scope.cluster.push(data);
        });
      }
    }
  } 
]);  
