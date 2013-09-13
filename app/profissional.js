function ProfissionalCtrl($scope, $window, $http) {
	var $ = jQuery;
	
	$scope.city = true;
	$scope.model = "o Profissional";

	$scope.profissional = function(){
		$scope.profissional = true;
		
		$scope.city = false;
		$scope.model = "a Cidade";
	};

	$scope.cidade = function(){
		$scope.profissionais = [{nome : "joao", desc : "pedreiro"}, {nome : "Renan", desc : "Pião virtual"}];
	};


}