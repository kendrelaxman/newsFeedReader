/*define([], function() {
	  function xmlFactoryController($http) {

 var factory = [];
          
          factory.getTodos = function(){
            return $http.get("./model/xmlModel/newsFeed.xml");
          }
        
            return factory;
        

	  }
	  xmlFactoryController.$inject=['$http'];

	return xmlFactoryController;
	});

*/
/*newsFeedReader.factory('xmlFactory',function($http){
    var factory = [];
    
    factory.getData = function(){
      return $http.get("./model/xmlModel/newsFeed.xml");
    }
  
      return factory;
  });
*/

/*newsFeedReader.factory('FeedService',['$http',function($http){
    return {
        parseFeed : function(url){
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent("http://localhost/WorkSpace/newsFeedReader/model/xmlModel/test.xml"));
        }
    }
}]);
*/

newsFeedReader.factory('xmlFactory',function($http){
    var factory = [];
    
    factory.getData = function(){
      return $http.get("http://localhost/WorkSpace/newsFeedReader/commonComponent/model/xmlModel/test.xml");
    }
  
      return factory;
  });

  

        