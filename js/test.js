var app = angular.module("myapp", []);
app.controller("myctrl", function ($scope) {
    $scope.name = "type your name";
	$scope.count = 0;
    $scope.$watch("name", function () {
		$scope.count++;
	});
});