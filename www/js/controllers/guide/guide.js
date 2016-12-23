(function(angular) {
    /**
     * app.controllers.gudie Module
     *
     * Description
     */
    angular.module('app.controllers.gudie', [])
        .controller('GuideCtrl', ['$scope', '$state', function($scope, $state) {

            console.log('1222');
            var mySwiper = new Swiper('#guideSlide', {
                pagination: '.swiper-pagination',
                onSlideChangeEnd: function(swiper) {
                    var index = swiper.activeIndex + 1;
                    console.log("23333");
                     for (var i = 1; i < 4; i++) {
                            var item1 = $('#tips-' + i);
                             item1.removeClass('guide-show');
                             item1.addClass('hidden');
                        }
                    
                        var item = $('#tips-' + index);
                        if (item.hasClass('hidden')) {
                            item.removeClass('hidden');
                            // setTimeout(function () {
                            console.log("11222");
                            item.addClass('guide-show');
                            // },5000);
                        }
                }
            });

            document.getElementById('close')
                .addEventListener('click', function(e) {
                    alert('ssss');
                    $state.go('tab.dash');
                    localStorage['isNotFirst'] = true;
                });

        }]);

})(angular);
