define([], function() {
  function homeController($scope) {
	  console.log("Hi I am in home");
	  $scope.message = "Lax Kendre";
  }
  homeController.$inject=['$scope'];
return homeController;
});
/*
angular.module('newsFeedReader')
.controller('homeController', ['$scope','xmlFactory','sharedDataService', function($scope,xmlFactory,sharedDataService) {
	
	 //loadTodos();
	console.log("Hi I am in home");
     
     function loadTodos(){
    	
    
    	xmlFactory.getData().success(function(data){
    		 
    		 

    		//newsXmlObject  = x2js.xml_str2json(data);
    		$scope.newsXmlObject = data;
          // console.log(newsXmlObject);
          
       });
       }
     
     $scope.toggleData = function(newData) {
    	 sharedDataService.set_Details(newData);
     };
	
	/*FeedService.parseFeed($scope.feedSrc).then(function(res){
       
        $scope.message=res.data.responseData.feed.entries;
    });*/
/*	$scope.feeds = FeedList.get();
	$scope.$on('FeedList', function (event, data) {
		$scope.feeds = data;
	
});
	
	
	$scope.homemessage = 'Look! Lax';
}]);*/