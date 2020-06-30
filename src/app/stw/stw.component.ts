import { Component, OnInit } from '@angular/core';
import * as angular from "angular";

angular.module("fiddle", [])
.controller("MainController", function($scope, stopwatch) {
    $scope.stopwatch = stopwatch;
})
.factory('stopwatch', function($timeout, $filter) {
    var stopwatch = {
        startTime: null,
        endTime: null,
        elapsedTime: function() {
            return this.endTime - this.startTime; },
        elapsedStr: function() {
            return $filter('date')(stopwatch.elapsedTime(), 'mm:ss');
        }
    };
    
   
    var timer = null;
    function tick() {
        console.log("tick");
        stopwatch.endTime = new Date();
        timer = $timeout(tick, 1000);
    }
    
    stopwatch['start'] = function() {
        stopwatch.startTime = new Date();
        tick();
    };
    
    stopwatch['pause'] = function() {
        stopwatch.endTime = new Date();
        $timeout.pause(timer);
        timer = null;
    };
    
    stopwatch['reset'] = function() {
        stopwatch.startTime = null;
        stopwatch.endTime = null;
    };
    
    return stopwatch;
});
