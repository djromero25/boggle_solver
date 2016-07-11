require.config({
  paths: {
    
  }
});

define([
  'app',
], function(app) {
  app.directive('boggleLetter', function() {
    return {
      restrict: 'E',
      controller: 'boggleLetterController',
      controllerAs: 'letterCtrl',
      templateUrl: 'app/components/boggle-letter/index.html',
      scope: {data: '=data'},
      link: function(scope, element, attr) {
      }
    };
  });
  app.controller('boggleLetterController', function($scope, $css) {
    $css.bind({
      href: 'app/components/boggle-letter/index.css'
    }, $scope);

    this.letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
  });
});
