(function () {
    'use strict';

    describe('Controller: PostsController', function () {
        // load the controller's module
        var e = angular;
        beforeEach(module('AngularRedditApp'));

        var PostsController, scope;

        // Initialize the controller and a mock scope
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            PostsController = $controller('PostsController', {
                $scope: scope
            });
        }));

        it('should not be null or undefined.', function () {
            expect(PostsController);
        });

        it('should be a constructor function.', function () {
            expect(typeof (PostsController) === "function");
        });
    });
})();