require.config({
  paths: {

  }
});
define([
  'app',
], function(app) {
  app.directive('wordList', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/word-list/index.html',
      controller: 'wordListController',
      controllerAs: 'listCtrl'
    };
  });
  app.controller('wordListController', function($scope, $css, $rootScope) {
    $css.bind({
      href: 'app/components/word-list/index.css'
    }, $scope);
  });
});
