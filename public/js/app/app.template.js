(function() { angular.module("App").run(["$templateCache", function($templateCache) {$templateCache.put('components/first-comp/first-comp.html','<div><h1>Hola</h1><p class="estilo"> {{$ctrl.name}}</p></div>');}])})();