(function(angular) {

    /**
     * app.services.goodlist Module
     *
     * Description
     */
    angular.module('app.services.goodlist', [])
        .factory('GoodService', ['$http', '$q', function($http, $q) {
            

            function testPromise(argument) {
            	var defer = $q.defer();
                var data = '测试promise规范';
                setTimeout(function(argument) {
                	// 修改了promise成功的状态
                    defer.resolve(data);
                },3000);

                //  setTimeout(function(argument) {
                // 	/*修改了promise成功的状态*/
                //     defer.reject('you are worng');
                // },5000);

                //   setTimeout(function(argument) {
                // 	/*修改了promise成功的状态*/
                //     defer.notify('you are ......');
                // },10);
                return defer.promise;

            }
            // $http.get(url).then(function(res) {
            //     setTimeout(function() {
            //         /* body... */
            //         setTimeout(function(argument) {
            //             /* body... */

            //             console.log('Promise规范')
            //         }, 3000);
            //     }, 3000);

            // }, function(error) {

            // })



            /*定义公共类数据请求类请求类*/
            function getData(url) {
            	var def = $q.defer();
                $http.get(url).then(
                    function(res) {
                    	// 在请求成功的回调函数中修改solve的状态
                    	def.resolve(res.data);
                        
                    },
                    function(error) {
                    	def.reject(error);
                    });
                return def.promise;
            }

            return {
                getData: getData,
                testPromise:testPromise
            };
        }]);
})(angular);
