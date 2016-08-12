(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  run.$inject = ['$rootScope', '$location'];
  function run($rootScope, $location) {
    FastClick.attach(document.body);
    $rootScope.open = function(path) {
      $location.path(path);
    }
  }

  // note: normally a proper build system with controllers and services in separate directories would be set up
  angular.module('application').controller('OverviewController', ['$scope', function($scope) {
    $scope.project = {
      name:'My Project',
      start:'2016-06-30T02:00:00.000Z',
      end:'2016-07-07T02:00:00.000Z',
      tasks: 32,
      late: 6,
      lateConfirmed: 2,
      done: 24
     };
  }]);

  angular.module('application').controller('VisualizationController', ['$scope', function($scope) {
    $scope.data = [
      {day:0,tasks:30, late:0, lateConfirmed:0},
      {day:1,tasks:30, late:0, lateConfirmed:0},
      {day:2,tasks:30, late:0, lateConfirmed:0},
      {day:3,tasks:30, late:0, lateConfirmed:0},
      {day:4,tasks:30, late:1, lateConfirmed:0},
      {day:5,tasks:30, late:2, lateConfirmed:0},
      {day:6,tasks:30, late:2, lateConfirmed:0},
      {day:7,tasks:30, late:2, lateConfirmed:0},
      {day:8,tasks:31, late:1, lateConfirmed:1},
      {day:9,tasks:31, late:0, lateConfirmed:2},
      {day:10,tasks:31, late:0, lateConfirmed:2},
      {day:11,tasks:32, late:0, lateConfirmed:2},
      {day:12,tasks:32, late:0, lateConfirmed:2},
      {day:13,tasks:32, late:0, lateConfirmed:2},
      {day:14,tasks:32, late:0, lateConfirmed:2},
      {day:15,tasks:32, late:0, lateConfirmed:2},
      {day:16,tasks:32, late:0, lateConfirmed:2}
    ];
  }]);

})();



