(function (angular) {
	/**
	* app.routes.tab Module
	*
	* Description
	*/
	angular.module('app.routes.tab', ['app.controllers.tab'])
	 .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'js/controllers/tabs/tabs.html',
                controller:'TabCtrl'
            });
        });
	
})(angular);