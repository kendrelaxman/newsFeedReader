define([], function() {
  function listController($scope) {
	  console.log("Hi I am in list");
  $scope.message = 'Look! I am an listController page.';
}
  listController.$inject=['$scope'];
return listController;
});

