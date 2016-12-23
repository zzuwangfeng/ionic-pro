(function(angular) {
    /**
     * app.shopping.homeroute Module
     *
     * Description
     */
    angular.module('app.routes.guideroute', ['app.controllers.gudie'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('guidePage', {
                    url: '/guidePage',
                    templateUrl: 'js/controllers/guide/guide.html',
                    controller: 'GuideCtrl'
                });
        });
})(angular);
