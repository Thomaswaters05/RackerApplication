var app = angular.module("RackerApplication", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/",
        {
            templateUrl: "app/Partials/Login.html",
            controller: "LoginController"
        })
        .when("/home",
        {
            templateUrl: "app/Partials/Home.html",
            controller: "HomeController"
        })
        .when("/signup",
        {
            templateUrl: "app/Partials/SignUp.html",
            controller: "SignUpController"
        })
        .when("/login",
        {
            templateUrl: "app/Partials/Login.html",
            controller: "LoginController"
        })

                .when('/list', {
                    templateUrl: 'app/partials/list.html',
                    controller: 'listController'
                })
                .when('/add', {
                    templateUrl: 'app/partials/add.html',
                    controller: 'addController'
                })
                .when('/detail', {
                    templateUrl: 'app/partials/detail.html',
                    controller: 'detailController'
                });
}]);


app.run(["$http", function ($http) {

    var token = sessionStorage.getItem('token');

    if (token)
        $http.defaults.headers.common['Authorization'] = `bearer ${token}`;

}
]);