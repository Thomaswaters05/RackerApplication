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
    .when("/recptadd",
        {
            templateUrl: "app/Partials/RecptAdd.html",
            controller: "RecptAddController"
        })
    .when("/recptlist",
        {
            templateUrl: "app/Partials/RecptList.html",
            controller: "RecptListController"
        })
    .when("/useradd",
        {
            templateUrl: "app/Partials/UserAdd.html",
            controller: "UserAddController"
        })
     .when("/userlist",
        {
            templateUrl: "app/Partials/UserList.html",
            controller: "UserListController"
        })
}])


app.run(["$http", function ($http) {

    var token = sessionStorage.getItem('token');

    if (token)
        $http.defaults.headers.common['Authorization'] = `bearer ${token}`;

}
]);