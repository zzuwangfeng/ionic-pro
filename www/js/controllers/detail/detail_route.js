// 商品详细页面路由模块
angular.module('app.routes.detail', ['app.controllers.detail'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('details', {
        url: '/details/:productId',
        templateUrl: 'js/controllers/detail/detail.html',
        controller: 'DetailsCtrl'
      })
  });
