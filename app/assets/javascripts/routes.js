angular.module('myApp').config(function($stateProvider, $urlRouteProvider){
	$stateProvider.state('home',{
		url: '/home',
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl'
	})
})