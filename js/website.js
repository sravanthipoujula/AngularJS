
angular.module('myApp',[]).
    config(function($routeProvider,$locationProvider){
        $locationProvider.html5Mode(true);
        $routeProvider.
            when("/",{templateUrl:"/partials/list.html"}).
            when("/add",{templateUrl:"/partials/edit.html",controller:"newController"}).
            when("/edit/:id",{templateUrl:"/partials/edit.html",controller:"editController"})
    })

function editController($scope, $location, $routeParams){

    $scope.person = $scope.crew[$routeParams.id];

    $scope.save = function(){
        $location.path("/");
    }

}

function newController($scope,$location){

    $scope.person={name:"",description:""};

    $scope.save = function(){
        $scope.crew.push($scope.person);
        $location.path("/");

    }

}


function appController($scope){

    $scope.crew = [
        {name : "A" ,description:"sample"},
        {name : "B" ,description:"sample"},
        {name : "C" ,description:"sample"}
    ];



    }


