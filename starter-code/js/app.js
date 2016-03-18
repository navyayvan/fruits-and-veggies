/* setup your angular app here */
var game = angular.module('FoodGame', []);

game.controller('GameCtrl', ['$scope', function($scope) {
	$scope.pool = fruit.concat(vegetables);
	$scope.fruits = [];
	$scope.veggies = [];

	$scope.moveFromPooltoFruits = function(idx) {
		var toMove = $scope.pool.splice(idx,1);
		$scope.fruits.push(toMove);
	};

	$scope.moveFromPooltoVeggies = function(idx) {
		var toMove = $scope.pool.splice(idx,1);
		$scope.veggies.push(toMove);
	}

	$scope.moveFromVeggiestoPool = function(idx) {
		var toMove = $scope.veggies.splice(idx,1);
		$scope.pool.push(toMove);
	}

	$scope.moveFromFruitsToPool = function(idx) {
		var toMove = $scope.fruits.splice(idx,1);
		$scope.pool.push(toMove);
	}

}]);

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);