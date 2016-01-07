//called the module method on the angular object
var myApp = angular.module('weatherApp', []);
//calling a controller method on myApp, array takes name of service that is being passed in to the function
myApp.controller("homeController", ["$scope", "cityService", function($scope, cityService){
    $scope.city = cityService.city;
    //watch method takes in two paramaters, like most methods: name, function
    $scope.watch('city', function(){
        cityService.city = $scope.city;
    })
    
}])

//creating a new service by calling the service method
myApp.service('cityService', function(){
    this.city = "Denver, Co";
});