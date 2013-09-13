angular.module('app', []).config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/profissional', {templateUrl: 'profissional.html',   controller: ProfissionalCtrl}).
      otherwise({redirectTo: '/'});
}]);