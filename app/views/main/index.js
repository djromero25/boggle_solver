require.config({
  paths: {
    'boggle': 'app/components/boggle/index',
    'word-list': 'app/components/word-list/index',
  }
});

define(['app', 'boggle', 'word-list'], function(app) {
  app.controller('MainController', ['$scope', '$css', '$http', function($scope, $css, $http) {

    $css.bind({
      href: 'app/views/main/index.css'
    }, $scope);
  }]);
});
