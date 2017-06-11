app.controller("RecptController", ["$scope", "$http", "$location",
    function RecptController($scope, $http, $location) {

        //Select all data
        $http.get('http://localhost:50638/app/Partials/Recpt').success(function (data) {
            $scope.Receipts = data;
        })
        .error(function () {
            $scope.error = "An Error has occured while loading posts!";
        });


        //Select single data
        $scope.getSingleData = function (Receipt) {
            $http.get('http://localhost:50638/app/Partials/Recpt' + Receipt.ReceiptID).success(function (data) {
                $scope.Receipt = data;
            })
            .error(function () {
                $scope.error = "An Error has occured while loading posts!";
            });
        };


        //Insert operation
        $scope.add = function (Receipt) {
            $http.post('http://localhost:50638/app/Partials/Recpt', Receipt).success(function (data) {
                alert("Added successfully!!");
                $scope.Receipts.push(data);
                ClearFields();
            }).error(function (data) {
                $scope.error = "An error has occured while adding! " + data;
            });
        };


        //Edit/Update operation
        $scope.save = function (Receipt) {
            $http.put('http://localhost:50638/app/Partials/Recpt' + Receipt.ReceiptID, Receipt).success(function (data) {
                alert("Updated successfully!!");
                $http.get('http://localhost:50638/app/Partials/Recpt').success(function (data) {
                    $scope.Receipts = data;
                    ClearFields();
                });
            }).error(function (data) {
                $scope.error = "An Error has occured while updating! " + data;
            });
        };


        //Delete operation
        $scope.deletecustomer = function (Receipt) {
            $http.delete('http://localhost:50638/app/Partials/Recpt' + Receipt.ReceiptID).success(function (data) {
                alert("Deleted successfully!!");
                $http.get('http://localhost:50638/app/Partials/Recpt').success(function (data) {
                    $scope.Receipts = data;
                });
            }).error(function (data) {
                $scope.error = "An error has occured while deleting! " + data;
            });
        };


        //Cler inputs
        function ClearFields() {
            $scope.Receipt.ReceiptID = "";
            $scope.Receipt.FirstName = "";
            $scope.Receipt.LastName = "";
            $scope.Receipt.ReceiptName = "";
            $scope.Receipt.ReceiptPrice = "";
        }
    }
]);