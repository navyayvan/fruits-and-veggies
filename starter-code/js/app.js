/* setup your angular app here */
var game = angular.module('FoodGame', []);

game.controller('GameCtrl', ['$scope', function($scope) {
	$scope.pool = fruit.concat(vegetables);
	$scope.fruits = [];
	$scope.veggies = [];
	$scope.item = 'background-color: red';

	$scope.moveFromPooltoFruits = function(idx) {
		$scope.fruits.push($scope.pool[idx]);
		$scope.pool.splice(idx,1);
	};

	$scope.moveFromPooltoVeggies = function(idx) {
		$scope.veggies.push($scope.pool[idx]);
		$scope.pool.splice(idx,1);
	}

	$scope.moveFromVeggiestoPool = function(idx) {
		$scope.pool.push($scope.veggies[idx]);
		$scope.veggies.splice(idx,1);
	}

	$scope.moveFromFruitsToPool = function(idx) {
		$scope.pool.push($scope.fruits[idx]);
		$scope.fruits.splice(idx,1);
	}

	$scope.checkAnswers = function() {
		if ($scope.pool.length === 0) {

			for (var i = 0; i < fruit.length ; i++) {
				if ($scope.fruits.indexOf(fruit[i]) == -1 ) {
						$scope.well = true;
					return false 
				}
			}

			for (var i = 0; i < vegetables.length; i++) {
				if ($scope.veggies.indexOf(vegetables[i]) == -1) {
					$scope.well = true;
					return false
				}
			}
			return true;
		}
	}

}]);

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);