require.config({
  paths: {}
});
define([
  'angularAMD',
  'angular-route',
  'angular-animate',
  'angular-aria',
  'angular-material',
  'angular-css',
], function(angularAMD) {
  var app = angular.module("BoggleSolver", ['ngRoute', 'ngMaterial', 'angularCSS']);

  app.config(function($routeProvider) {
    var viewLoc = 'app/views/';
    $routeProvider
      .when("/main", angularAMD.route({
        templateUrl: viewLoc + 'main/index.html',
        controllerUrl: viewLoc + 'main/index.js',
        controller: 'MainController',
        controllerAs: 'mainCtrl'
      }))
      .otherwise({
        redirectTo: '/main'
      });
  });

  return angularAMD.bootstrap(app);
});
