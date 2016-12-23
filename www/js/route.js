/*配置路由*/
(function(angular) {
    /**
     * app.shopping.route Module
     *
     * Description
     */
    angular.module('app.shopping.route', [
        'app.routes.tab',
        'app.routes.guideroute',
        'app.shopping.homeroute', 
        'app.routes.categoryroute',
        'app.routes.goodlist',
        'app.routes.detail'
        ])
        .config(function($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            // $stateProvider
            // // setup an abstract state for the tabs directive
            $stateProvider

/*路由的名字可以随便起（.后面可以随便起）*/
            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });
            
            // if none of the above states are matched, use this as the fallback

            if (localStorage['isNotFirst']) {
                $urlRouterProvider.otherwise('/tab/dash');
            } else {
                $urlRouterProvider.otherwise('/guidePage');
            }

            // 

        })
})(angular);
