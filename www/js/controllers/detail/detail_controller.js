// 商品详细页面功能
angular.module('app.controllers.detail', ['app.services.detail'])
  .controller('DetailsCtrl',function($scope,$window,DetailsFty) {

    //$scope.$on('$ionicView.enter', function (e) {
    //});
    //
       $scope.goBack = function(argument) {
       
				console.log('ssss');
                window.history.back();
            }

  })




