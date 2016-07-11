require.config({
  paths: {
    'boggle': 'app/components/boggle/index',
    'word-list': 'app/components/word-list/index',
  }
});

define(['app', 'boggle', 'word-list'], function(app) {
  app.controller('MainController', ['$scope', '$css', '$http', function($scope, $css, $http) {

    $css.bind({
      href: 'app/views/my_files/index.css'
    }, $scope);

    var _this = this;

    $http.get('/assets/english-words.json.txt').success(function(res){
      _this.words = res;
      console.log(res);
    });
  }]);
});
