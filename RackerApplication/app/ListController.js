(function () {
    angular.module('RackerApplication')
        .controller('listController', listController);

    listController.$inject = ['$scope', '$http'];

    function listController($scope, $http) {
        $scope.welcome = "list controller working";

        //the empty list to iterate through on the screen
        $scope.list = [];

        /*
            this $http call will fire immediately when the 
            list controller is called (when you navigate to the page).
            This hits our API with a HTTP GET request.
        */
        $http.get('/api/receipt')
            .then(function (res) {
                $scope.list = res.data;
            });

    }
})();