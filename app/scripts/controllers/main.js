'use strict';

/**
 * @ngdoc function
 * @name myModuleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myModuleApp
 */
angular.module('myModuleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
