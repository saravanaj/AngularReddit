(function () {
    "use strict";

    var app = angular.module("AngularRedditApp");

    app.factory("redditService", ["$http", "appConfig", function ($http, appConfig) {
        var redditService = {
            getPosts: function (path, params) {
                var extendedParams = angular.extend({
                    sort: "hot",
                    count: 0,
                    limit: 25,
                    jsonp: appConfig.defaultJsonCallback
                }, params);

                // return a promise.
                return $http.jsonp(appConfig.redditApiUrl + path, {
                    params: extendedParams
                });
            }
        };
        return redditService;
    }]);
})();