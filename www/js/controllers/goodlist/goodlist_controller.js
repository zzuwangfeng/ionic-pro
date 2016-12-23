(function(angular) {
    /**
     * app.controllers.category Module
     *
     * Description
     */
    angular.module('app.controllers.goodlist', ['app.services.goodlist'])
        .controller('GoodListCtrl', ['$scope', '$rootScope', '$state', '$ionicHistory', '$timeout', '$stateParams', '$ionicLoading', 'GoodService', '$q', function($scope, $rootScope, $state, $ionicHistory, $timeout, $stateParams, $ionicLoading, GoodService, $q) {
            console.log($stateParams);
            console.log($stateParams.typeNumber);


            // var promise = GoodService.testPromise();
            // promise.
            // then(function(data) {
            //         console.log(data);
            //         var def = $q.defer();
            //         def.resolve('傻逼');
            //         return def.promise;

            //     })
            //     .then(function(data) {
            //         console.log(data + 'data');
            //     }).finally(
            //         function() {
            //             console.log("所有的函数回调完成");
            //         });

            // 
            $scope.pms_isMoreItemsAvailable = true;





            $scope.obj_goodsListData = [];
            $scope.$on("$ionicView.enter", function() {
                /*第一次主动刷新下数据*/
                $scope.refreshHeader();
            });

            /*刷新数据*/
            function refrshData() {
                var promise = GoodService.getData('js/controllers/goodlist/data.json');

                promise.then(function(data) {
                    $scope.obj_goodsListData = data;
                }, function(error) {

                })
            }

            /*加载更多数据*/
            function reloadMoreData() {
                /*加载一个loading框*/
                $ionicLoading.show({
                    template: '客官请稍候...'
                });

                var promise = GoodService.getData('js/controllers/goodlist/datamore.json');

                promise.then(function(data) {
                    if (data != null) {
                        $.each(data, function(inx, item) {
                            $scope.obj_goodsListData.push(item);

                        });
                        setTimeout(function() {
                            /* body... */
                            /*让下面的刷新动画合上*/
                            $scope.$broadcast('scroll.infiniteScrollComplete');
                            /*让loading框隐藏掉*/
                            $ionicLoading.hide();

                        }, 2000);
                    }
                }, function(error) {

                })

            }
            $scope.reloadMore = function() {
                reloadMoreData();

            }

            $scope.refreshHeader = function(argument) {
                console.log('刷新了');
                refrshData();
                /*让下拉刷新合上*/
                $scope.$broadcast('scroll.refreshComplete');



            }

            $scope.goBack = function(argument) {
                console.log('aaa');
                console.log($ionicHistory);
                // /*ionicHistory返回*/官方文档说的可以
                // $ionicHistory.goBack();
                //   $backView = $ionicHistory.backView();
                //   $backView.go();

                /*你这是window的对象history来处理的*/
                console.log($rootScope.name);

                /*发送一个广播*/
                $rootScope.$broadcast('badgeChange', 'bidule');

                window.history.back();
            }
        }]);
})(angular);
