"use strict";

angular.module('app', [])
  .config(($stateProvider, $urlRouterProvider, $httpProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/dashbaord');
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashbaord/dashbaord.html',
        controller: 'DashboardCtrl'
      })
      .state('signin', {
        url: '/signin',
        templateUrl: 'app/auth/signin.html',
        controller: 'AuthCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/auth/signup.html',
        controller: 'AuthCtrl'
      })
      .state('medications', {
        url: '/medications',
        templateUrl: 'app/auth/medications.html',
        controller: 'MedicationCtrl'
      });
      $httpProvider.interceptors.push('AttachTokens');
    })
    .factory('AttachTokens', ($window) => {

      let attach = {
        request: (object) => {

          let jwt = $window.localStorage.getItem('com.pillMeNow');

          if (jwt) {
            object.headers['x-access-token'] = jwt;
          }

          object.headers['Allow-Control-Allow-Origin'] = '*';

          return object;

        }
      };

      return attach;

    })
    .run(($rootScope, $state, Auth) => {
      $rootScope.on('$stateChangeStart', (evt, toState) => {

        if (toState.name === 'signin') return;

        if (!Auth.isAuth() && toState.name !== 'signup') {
          evt.preventDefault();
          $state.go('signin');
        }

      });
    });