var melhoresAtletasApp = angular.module('melhoresAtletasApp', []);

melhoresAtletasApp.controller('AtletaController', function AtletaController($scope) {
    
    $scope.atleta = {
        'nome' : 'Michael Phelps',
        'categoria' : 'Nadador',
        'pais' : 'Estados Unidos'
    }
});