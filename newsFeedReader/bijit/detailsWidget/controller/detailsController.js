

define([], function() {
	  function detailsController($scope) {
		  console.log("Hi I am in details");
		  $scope.message = "Lax Kendre details";
	  }
	  detailsController.$inject=['$scope'];
	return detailsController;
	});
	
