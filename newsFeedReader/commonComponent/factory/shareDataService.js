

newsFeedReader.factory('sharedDataService',function(){
	var _Details = {};

	return {
	    get_Details: function () {
	        return _Details;
	    },
	    set_Details: function (value) {
	    	_Details = value;
	    }
	};

});