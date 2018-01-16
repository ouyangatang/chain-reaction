"use strict";

var ideoColabApp = angular.module('ideoColabApp', ['ngRoute']);

ideoColabApp.controller('DashboardController', ['$scope', function($scope) {
  $scope.hits = null;
	window.setInterval(function() {
		$.getJSON('http://localhost:8000/points.json', function(data) {
	      // $.getJSON('http://10.2.252.70:4000/alerts/CA-ILEG0', function(data) {
		    $scope.hits = data.features;
		    // console.log($scope.hits);
		    $scope.$digest(); 
		  });
	}, 2000);
}]);