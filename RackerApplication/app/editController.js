(function () {
    angular.module('RackerApplication')
        .controller('editController', editController);
  
    editController.$inject = ['$scope','$http', '$routeParams', '$location'];


    function editController($scope, $http, $routeParams, $location) {
        $scope.receipt = {};

        //$http.get('/api/receipt/').then(function (response) {
        //    $scope.receipt = response.data;
        //    console.log("scoperec",$scope.receipt);
        //});


        
        $scope.getReceipt = function () {
            var recEdit = $scope.recEdit;
            if (recEdit) {
                $http.get('/api/Receipt/' + recEdit).then(function (data) {
                    $scope.receipt = data;
                    console.log(recEdit);
                });
            }
            else {
                $scope.receipt = null;
            }
        };

        $scope.save = function () {

            var recObj = {
                Id: $scope.id,
                FirstName: $scope.receipt.firstName,
                ReceiptName: $scope.receipt.receiptName,
                Recieptprice: $scope.receipt.recieptPrice

            };
            console.log("this is recObj",recObj)

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

            });
        }
        else {
            $scope.title = "Create New Receipt";
        }

    }


})();