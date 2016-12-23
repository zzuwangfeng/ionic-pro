(function(angular) {
    /**
     * app.controllers.tab Module
     *
     * Description
     */
    angular.module('app.controllers.tab', [])
        .controller('TabCtrl', ['$scope','$rootScope', function($scope,$rootScope) {
            $scope.badge = 120;
            $scope.categoryBadge = 120;
            $scope.cartBadge = 120;
            $scope.meBadge = 120;

            $rootScope.name = '傻逼傻逼傻逼';

    
    			/*广播 
				1.通过$on 监听广播事件 badgeChange 广播名字
				发送广播 第一个参数广播的名字 第二参数广播的内容 是个对象
				2. $broadcast('badgeChange', 'bidule');
				3. $rootScope是一个全局的对象 ，所有的控制器都可以共享
    			*/
            $rootScope.$on("badgeChange", function(event, msg) {
                console.log(msg + 'tab_controller.js')
                $scope.badge = 10;

            });


        }]);

})(angular);
