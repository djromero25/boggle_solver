require.config({
  paths: {
  }
});

define([
  'app',
], function(app) {
  app.directive('boggle', function() {
    return {
      restrict: 'E',
      controller: 'boggleController',
      controllerAs: 'boggleCtrl',
      templateUrl: 'app/components/boggle/index.html',
      scope: {data: '=data'},
      link: function(scope, element, attr) {
      }
    };
  });
  app.controller('boggleController', function($scope, $css) {
    $css.bind({
      href: 'app/components/boggle/index.css'
    }, $scope);
  });
});
