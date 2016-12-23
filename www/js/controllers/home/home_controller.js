(function(angular) {
    /**
     * app.shopping.home Module
     *
     * Description
     */
    angular.module('app.controllers.home', [])
        .controller('HomeCtrl', ['$scope', '$window', function($scope, $window) {

            // 模拟头部滚动条数据
            function getHeaderSlideData() {
                $scope.headerSlideData = [{
                    alt: "双十一预热主场会",
                    src: "img/home/home-headerSlide-1.jpg"
                }, {
                    alt: "11月11天家电低价不停歇",
                    src: "img/home/home-headerSlide-2.jpg"
                }, {
                    alt: "家具盛典 好货提前抢",
                    src: "img/home/home-headerSlide-3.jpg"
                }, {
                    alt: "IT抢券节",
                    src: "img/home/home-headerSlide-4.jpg"
                }, {
                    alt: "潮流数码 双11爽购攻略",
                    src: "img/home/home-headerSlide-5.jpg"
                }];
            }
            // 初始化头部滚动条
            function initHeaderSlide() {
                var headerSwiper = new Swiper('#headerSlider', {
                    prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',

                    loop: true,
                    paginationClickable: true,
                    autoplay: 2000,
                    /*当你触摸swiper之后，autoplay还会自动执行*/
                    autoplayDisableOnInteraction: false,
                    // // 如果需要分页器
                    pagination: '.swiper-pagination',
                    // // // 改变之后立马自动更新 
                    observer: true,
                    observeParents: true,
                    /*某个silder切换完成之后会调用该函数*/
                    onSlideChangeEnd: function(swiper) {
                        // alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
                    },
                    /*点击某个silder之后执行*/
                    onTap: function(swiper) {
                        // alert('你tap了Swiper'+swiper.activeIndex);
                    }
                });
            }


            getHeaderSlideData();

            // 初始化京东头条滚动条
            function initToutiaoSlide() {
                var toutiaoSwiper = new Swiper('#toutiaoSlider', {
                    /*slide 滚动方向为上下滚动*/
                    direction: 'vertical',
                    /*每隔2000毫秒滚动一次*/
                    autoplay: 1000,
                    loop: true
                });
            };

            // 改变头部颜色
            function headerChangeColor() {
                var bg = $window.document.getElementById('home-content');
                var nowOpacity = 0;
                bg.onscroll = function(event) {
                    if (this.scrollTop / 250 < .85) {
                        nowOpacity = this.scrollTop / 250;
                    }
                    document.getElementById("headerBar-bg").style.opacity = nowOpacity;
                }
            }
            //回到顶部
            function goTop() {
                var bg = window.document.getElementById('home-content');
                var goTop = document.querySelector(".back_top");

                bg.addEventListener('scroll', function() {
                    var top = bg.scrollTop;
                    if (top > 200) {
                        goTop.style.opacity = 1;
                    } else {
                        goTop.style.opacity = 0;
                    }
                }, false);

                goTop.onclick = function() {
                    bg.scrollTop = 0;
                }
            };

            $scope.$on('$ionicView.loaded', function() {

                /*如果想要通过js往ion-view添加标签,必须要等ion-view loaded
                 也就是ion-view 装载完成，即画布已经准备好了，
                 否则有可能出现未知的错误
                */

            });

            $scope.$on('$ionicView.enter', function() {
                initHeaderSlide();
                headerChangeColor();
                initToutiaoSlide();
                goTop();

            });

        }]);






})(angular);
