'use strict';

angular.module('aconexTodoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'todoController as todoController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
