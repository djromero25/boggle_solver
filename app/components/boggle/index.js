require.config({
  paths: {
    'boggle-letter': 'app/components/boggle-letter/index'
  }
});

define([
  'app',
  'boggle-letter'
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
  app.controller('boggleController', function($scope, $css, $rootScope) {
    $css.bind({
      href: 'app/components/boggle/index.css'
    }, $scope);

    this.buttonText = 'Solve';

    this.buttonClick = function(){
      if(this.buttonText === 'Solve'){
        var letters = document.getElementsByClassName('boggle-letter');
        letters = Array.prototype.slice.call(letters);

        letters = letters.map(function(el){
          return el.getElementsByTagName('input')[0].value;
        });

        $rootScope.$emit('boggle:solve',{
          letters: letters
        });
      }
    };
  });
});
