var app=angular.module("myApp",[]);
app.controller("myCtr",function($scope,$http){
    $http.get("data.json").then(function(item){
        $scope.players=item.data;
      $scope.addUsers=function(){

      $scope.players.push($scope.player);
        
    };
        $scope.removeUser=function(removedUser){
            $scope.players.splice(removedUser,1);
        };
    });
});
