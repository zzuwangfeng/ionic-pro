(function(angular) {
    /**
     * app.shopping.homeroute Module
     *
     * Description
     */
    angular.module('app.shopping.homeroute', ['app.controllers.home'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('tab.dash', {
                    url: '/dash',
                    views: {
                        'tab-dash': {
                            templateUrl: 'js/controllers/home/home.html',
                            controller: 'HomeCtrl'
                        }
                    }
                });
        });
})(angular);
