(function(angular) {
    /**
     * app.shopping.homeroute Module
     *
     * Description
     */
    angular.module('app.routes.goodlist', ['app.controllers.goodlist'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('goodsList', {
                    url: '/goodsList/:typeNumber',
                    templateUrl: 'js/controllers/goodlist/goodlist.html',
                    controller: 'GoodListCtrl'
                });
        });
})(angular);
