(function (angular) {
	
/**
* app.routes.category Modul
*
* Description
*/
angular.module('app.routes.categoryroute', ['app.controllers.category'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('tab.category', {
                    url: '/category',
                    views: {
                        'tab-category': {
                            templateUrl: 'js/controllers/category/category.html',
                            controller: 'CategoryCtrl'
                        }
                    }
                });

}]);

})(angular);