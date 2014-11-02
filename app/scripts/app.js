(function () {
    "use strict";

    var app = angular.module("AngularRedditApp", ["ngAnimate", "ngCookies", "ngResource", "ngRoute", "ngSanitize", "ngTouch"]);
    app.config(function ($routeProvider) {

        $routeProvider
        .when("/", {
            templateUrl: "views/posts.html",
            controller: "PostsController"
        })
        .when("/r/:subreddit", {
            templateUrl: "views/posts.html",
            controller: "PostsController"
        })
        .when("/domain/:domain", {
            templateUrl: "views/posts.html",
            controller: "PostsController"
        })
        .otherwise({
            templateUrl: "404.html"
        });
    });

    app.constant("appConfig", {
        redditApiUrl: "http://api.reddit.com/",
        defaultJsonCallback: "JSON_CALLBACK"
    });
})();