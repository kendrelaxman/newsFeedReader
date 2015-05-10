


define([],function(){
    'use strict';

    function config($routeProvider) {
    	
    	
    	$routeProvider.when('/home', {
    		templateUrl : 'bijit/homeWidget/template/homeLayout.html',
    		controller : 'homeController'
    	}).when('/details', {
    		templateUrl : 'bijit/detailsWidget/template/detailsLayout.html',
    		controller : 'detailsController'
    	}).when('/list', {
    		templateUrl : 'bijit/listWidget/template/listLayout.html',
    		controller : 'listController'
    	}).otherwise({
    		redirectTo : '/home'
    	});
        
        
    }

    config.$inject=['$routeProvider'];

    return config;
});