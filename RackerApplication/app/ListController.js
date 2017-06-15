﻿(function () {
    angular.module('RackerApplication')
        .controller('listController', listController);

    listController.$inject = ['$scope', '$http'];

    function listController($scope, $http) {
        $scope.welcome = "list controller working";

        //this is what iterates in add html
        $scope.list = [];

        $http.get('/api/receipt')
            .then(function (res) {
                $scope.list = res.data;
                console.log($scope.list);
                
            });
    }
})();