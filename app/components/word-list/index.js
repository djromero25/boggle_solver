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
    var squareLength = 4;

    this.wordsData = {};

    $http.get('/assets/english-words.json.txt').success(function(res) {
      _this.allWords = res;
      console.log(res);
    });

    $rootScope.$on('boggle:solve', function(e, data) {
      boggleSolve(data.letters);
    });

    function makeBoard(letters) {
      console.log(letters.join(''))
      var board = [];
      for (var i = 0; i < squareLength; i++) {
        board.push([]);
        for (var j = 0; j < squareLength; j++) {
          board[i].push(letters[i * squareLength + j]);
        }
      }
      console.log(letters, board)
      return board;
    }

    function filterWords(letters) {
      return _this.allWords.filter(function(word) {
        if (word.length < 3) return false;
        for (var i = 0; i < word.length; i++) {
          if (!letters.includes(word[i])) return false;
        }
        return true;
      });
    }

    function letterWasReachable(currLetterRow, currLetterColumn, lastLetterRow, lastLetterColumn) {
      if (lastLetterRow === undefined && lastLetterColumn === undefined) return true;
      else if ((currLetterRow - lastLetterRow) > 1 || (currLetterRow - lastLetterRow) < -1) return false;
      else if ((currLetterColumn - lastLetterColumn) > 1 || (currLetterColumn - lastLetterColumn) < -1) return false;
      return true;
    }

    function wordInBoggle(word, board, lastLetterRow, lastLetterColumn) {
      board = board || _this.board;
      var newBoard = board.map(function(row) {
        return row.slice();
      });
      if (lastLetterRow !== undefined && lastLetterColumn !== undefined) newBoard[lastLetterRow][lastLetterColumn] = null;
      var inBoggle = false;
      var letter = word[0];
      word = word.substr(1);
      for (var i = 0; i < squareLength; i++) {
        for (var j = 0; j < squareLength; j++) {
          if (newBoard[i][j] === letter && letterWasReachable(i, j, lastLetterRow, lastLetterColumn)) {
            if (word === '') {
              inBoggle = true;
            } else if (!inBoggle) inBoggle = wordInBoggle(word, newBoard, i, j);
          }
        }
      }
      if (inBoggle && lastLetterRow === undefined) console.log(letter + word)
      return inBoggle;
    }

    function wordsInBoggle(words) {
      return words.filter(function(word) {
        return wordInBoggle(word);
      });
    }

    function boggleSolve(letters) {
      var start = new Date().getTime();
      console.time('test')
      _this.board = makeBoard(letters);
      var words = filterWords(letters);
      _this.words = wordsInBoggle(words);
      console.timeEnd('test')
      var end = new Date().getTime();
      var time = end - start;


      console.log('Execution time: ' + time);
    }
  });
});