"use strict";

  import angular from 'angular';
  import uiRouter from 'angular-ui-router';
  import angularComponent from 'angular-component';
  import Components from './components/components';
  import AppComponent from './app.component';

  angular.module('medup-web', [
    uiRouter,
    Components.name
  ])
    .config(($httpProvider, $urlRouterProvider) => {
      $urlRouterProvider.otherwise('/');
      // $httpProvider.interceptors.push('AttachTokens');
    })
    .component('medupWeb', AppComponent);
    // .factory('AttachTokens', attachTokens)
    //  .run();
//
// function attachTokens($window) {
//
//   let attach = {
//     request: (object) => {
//
//       let jwt = $window.localStorage.getItem('com.pillMeNow');
//
//       if (jwt) {
//         object.headers['x-access-token'] = jwt;
//       }
//
//       object.headers['Allow-Control-Allow-Origin'] = '*';
//
//       return object;
//
//     }
//   };
//
//   return attach;
//
// }
//
// function appRun($rootScope, $state, Auth) {
//   $rootScope.on('$stateChangeStart', (evt, toState) => {
//
//     if (toState.name === 'signin') return;
//
//     if (!Auth.isAuth() && toState.name !== 'signup') {
//       evt.preventDefault();
//       $state.go('signin');
//     }
//   });
// }
