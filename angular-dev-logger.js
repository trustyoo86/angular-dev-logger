 (function (root, factory) {
   'use strict';

   //AMD mode
   if (typeof define === 'function' && define.amd) {
     define(['angular'], factory);
   } else if (typeof exports === 'object') {
     module.exports = factory(require('angular'));
   } else {
     factory(root.angular);
   }
 }(this, function (angular) {
   'use strict';
   /**
    * angular development & production mode debug log handler
    * @version 0.1.0
    * @ngdoc provider
    * @name angular.dev.logger
    * @author KernYoo (trustyoo86@gmail.com)
    */
   return angular.module('angular.dev.logger', [])
     /**
      * logger provider module
      * @memberof angular.dev.logger
      * @ngdoc provider
      * @name $devLogger
      */
     .provider('$devLogger', function () {
       var winConsole = window.console || {},
           logFunc = winConsole.log;

       var Logger = winConsole;
       var consoleSupport = navigator.userAgent.match(/iPad/i) != void 0;

       /**
        * debug logger set modes
        * If debugMode is true, console.log operate.
        * If debugMode is false, console.log is not operate.
        * @memberof $devLogger
        * @function debugMode
        * @param  {Boolean} isDebugMode debugmode 여부
        * @example
        *   app.module('myApp', [
        *     'iot.logger'
        *   ])
        *   .config(function ($iotLoggerProvider) {
        *     $iotLoggerProvider.debugMode(true);
        *
        *     console.log('test'); //console log test
        *
        *     $iotLoggerProvider.debugMode(false);
        *
        *     console.log('test'); //disable console
        *     console.error('error');
        *     console.info('info');
        *   })
        */
       this.debugMode = function (isDebugMode) {
         Logger.debugMode = isDebugMode;
         if (isDebugMode) {
           Logger.log = logFunc;
           Logger.error = logFunc;
           Logger.info = logFunc;
         } else {
           Logger.log = function () { return false; };
           Logger.error = function () { return false; };
           Logger.info = function () { return false; };
         }
       };

       this.$get = function () {
         function LoggerFactory() {
           Logger.getDebugMode = function () {
             return Logger.debugMode;
           };

           return Logger;
         }

         return new LoggerFactory();
       };
     });
 }));
