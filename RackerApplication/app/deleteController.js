(function () {
    angular.module('RackerApplication')
        .controller('deleteController', deleteController);

    deleteController.$inject = ['$scope', '$http', '$routeParams', '$location'];


    function deleteController($scope, $http, $routeParams, $location) {
        $scope.id = $routeParams.id;

        $http.get('/api/receipt/' + $routeParams.id).then(function (response) {
            $scope.receipt = response.data;
            
        });

        $scope.delete = function () {
 
            $http.delete('/api/Receipt/' + $scope.id).then(function (data) {
                $location.path('/list');
            },function (data) {
                $scope.error = "Its fucked.." + data;
            });
        };
    }
})();