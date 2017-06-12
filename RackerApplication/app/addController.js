(function () {
    angular.module('RackerApplication')
        .controller('addController', addController);

    addController.$inject = ['$scope', '$http', '$location'];

    function addController($scope, $http, $location) {
        $scope.welcome = "add controller working";
        $scope.btnText = "Save";
        

        $scope.receiptSave = {
            FirstName: $scope.firstName,
            LastName: $scope.firstName,
            ReceiptName: $scope.receiptName,
            ReceiptPrice: $scope.receiptPrice,
            //!!not sure how to add iscomplete portion!!
        };

        $scope.submit = function (receipt) {
            
            $http.post('/api/receipt', receipt)
                .then(function (res) {
                    //Redirects 2 list page
                    $location.path('/list');
                });
        };

    }
})();


