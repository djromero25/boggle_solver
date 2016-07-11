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
  app.controller('wordListController', function($scope, $css, $rootScope, $http) {
    $css.bind({
      href: 'app/components/word-list/index.css'
    }, $scope);

    var _this = this;

    $http.get('/assets/english-words.json.txt').success(function(res) {
      _this.allWords = res;
      console.log(res);
    });

    $rootScope.$on('boggle:solve', function(e, data) {
      boggleSolve(data.letters);
    });

    function filterWords(letters) {
      return _this.allWords.filter(function(word) {
        for (var i = 0; i < word.length; i++) {
          if (!letters.includes(word[i])) return false;
        }
        return true;
      });
    }

    function wordsInBoggle(words) {
      return words.filter(function(word) {
        return true;
      });
    }

    function boggleSolve(letters) {
      var words = filterWords(letters);
      _this.words = wordsInBoggle(words);
    };
  });
});