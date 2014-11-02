(function () {
    "use strict";

    var app = angular.module("AngularRedditApp");

    app.controller("PostsController", ["$scope", "$location", "redditService", function ($scope, $location, redditService) {
        $scope.goToSubreddit = function () {
            var pathToChange = $scope.subreddit
            ? "/r/" + $scope.subreddit
            : "/";
            $location.path(pathToChange);
        };
        $scope.loading = true;
        $scope.posts = [];

        redditService.getPosts($location.path())
        .success(function (result) {
            $scope.loading = false;
            $scope.posts = result.data.children;
        });
    }]);
})();