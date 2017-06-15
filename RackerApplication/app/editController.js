(function () {
    angular.module('RackerApplication')
        .controller('editController', editController);
  
    editController.$inject = ['$scope','$http', '$routeParams', '$location'];


    function editController($scope, $http, $routeParams, $location) {
        
        $http.get('/api/receipt/').then(function (response) {
            $scope.receipt = response.data;
        });

        $scope.id = 0;

        
        $scope.getReceipt = function () {
            var recEdit = $scope.recEdit;
            if (recEdit) {
                $http.get('/api/Receipt/' + recEdit).then(function (data) {
                    $scope.receipt = data;
                });
            }
            else {
                $scope.receipt = null;
            }
        };

        $scope.save = function () {

            var recObj = {
                Id: $scope.Id,
                FirstName: $scope.FirstName,
                ReceiptName: $scope.ReceiptName,
                Receiptprice: $scope.Receiptprice

            };

            if ($scope.id === 0) {
                $http.post('/api/Receipt/', recObj).then(function (data) {
                    $location.path('/list');
                }, (function (data) {
                    $scope.error = "not working bro.. " + data.ExceptionMessage;
                }));
            }

            $http.put('/api/Receipt/', recObj).then(function (data) {
                $location.path('/list');
            }, (function (data) {
                console.log(data);
                $scope.error = "this isnt working " + data.ExceptionMessage;
            }));
        };

        if ($routeParams.id) {
            console.log("is this working?")
            $scope.id = $routeParams.id;
            $scope.title = "Edit Receipt";

            $http.get('/api/receipt/' + $routeParams.id).then(function (response) {
                $scope.receipt = response.data;

                $scope.getReceipt();
            });
        }
        else {
            $scope.title = "Create New Receipt";
        }

    }


})();