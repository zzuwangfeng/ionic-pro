angular.module('starter.controllers', [])
.controller('AccountCtrl', function($scope, $rootScope) {
    $scope.settings = {
        enableFriends: true
    };
    $rootScope.$on("badgeChange", function(event, msg) {
        console.log(msg + 'AccountCtrl.js')
    });
});
