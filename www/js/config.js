/*config.js 一般用于ionic项目在编译的时候 
Android和iOS平台有时候会有一些样式不兼容的问题，
在此文件里边适配*/
(function(angular) {
    /**
     * app.shopping.config Module
     *
     * Description
     */
    angular.module('app.shopping.config', [])
        .config(function($ionicConfigProvider) {
        	/*给Android适配 让tabs在下边*/
        	$ionicConfigProvider.tabs.position('bottom');
        	$ionicConfigProvider.tabs.style('standard');

        });
})(angular);
