function pay() {
    $(".receipt").slideUp("slow");
    $(".paid").slideDown("slow");
}

(function () {
    angular.module('RackerApplication')
        .controller('addController', addController);


    addController.$inject = ['$scope', '$http', '$location'];

    function addController($scope, $http, $location) {
        $scope.btnText = "Save";
        
        

        $scope.receipt = {
            FirstName: "",
            IsComplete: false,
            ReceiptName: "",
            RecieptPrice: ""
        };

        $scope.submit = function (receipt) {
            
            $http.post('/api/receipt', receipt)
                .then(function (res) {
                    console.log(res)
                    //Redirects 2 list page
                    $location.path('/list');
                });
        };

    }
})();


