/**
 * Created by subramaniam on 09/02/17.
 */

var app = angular.module("calendarApp", ['ngRoute', 'ngMaterial', 'ngMessages', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', '$mdThemingProvider',
  function ($routeProvider, $locationProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('green');

    $routeProvider.when('/', {
      templateUrl: 'src/module/login/login.html',
      controller: 'loginCtrl'
    });

    $locationProvider.html5Mode(true);
  }]);