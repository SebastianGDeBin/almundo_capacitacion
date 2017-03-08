angular.module('modulo')
.directive('miDirectiva', miDirectiva)/*---se puede definir la funcion aca o el nombre y abajo la funcion---*/

function miDirectiva(){
	return{
		template:"<p>Hola</p>",
		controller: function($scope){	/*---el $scope, mantiene el estado de las variables de la aplicacion---*/
			/*---aca va la logica---*/
		}
		scope{
			/*---aca seteas las propiedades del scope---*/
		}
	}
}