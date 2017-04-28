describe('angular-dev-logger module test', function () {
  'use strict';

  var devLogger;

  beforeEach(module('angular.dev.logger'));

  describe('devLogger debugMode = true test', function () {
    beforeEach(function () {
      module(function ($devLoggerProvider) {
        $devLoggerProvider.debugMode(true);
      });

      inject(function (_$devLogger_) {
        devLogger = _$devLogger_;
      });
    });

    it ('If Logger module debugMode is true, console.log is operated.', function () {
      expect(devLogger.getDebugMode()).be.equal(true);
      console.log('logger debugmode true');
    });

    it ('If Logger module debugMode is true, console.error is operated.', function () {
      expect(devLogger.getDebugMode()).be.equal(true);
      console.error('logger debugmode true');
    });

    it ('If Logger module debugMode is true, console.info is operated.', function () {
      expect(devLogger.getDebugMode()).be.equal(true);
      console.info('logger debugmode true');
    });
  });

  describe('devLogger debugMode = false', function () {
    beforeEach(function () {
      module(function ($devLoggerProvider) {
        $devLoggerProvider.debugMode(false);
      });

      inject(function (_$devLogger_) {
        devLogger = _$devLogger_;
      });
    });

    it ('If Logger module debugMode is false, console.log is not operated.', function () {
      expect(devLogger.getDebugMode()).be.equal(false);
      console.log('logger debugmode false');
    });

    it ('If Logger module debugMode is false, console.error is not operated.', function () {
      expect(devLogger.getDebugMode()).be.equal(false);
      console.error('logger debugmode false');
    });

    it ('If Logger module debugMode is false, console.info is not operated.', function () {
      expect(devLogger.getDebugMode()).be.equal(false);
      console.info('logger debugmode false');
    });
  });
});
