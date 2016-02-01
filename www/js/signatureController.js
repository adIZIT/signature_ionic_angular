(function() {
	var app = angular.module('starter');

	app.controller('SignatureController', ['$scope', function($scope) {
		var vm = this;
		
		vm.signature = undefined;

		var canvas = document.getElementById('signatureCanvas');
		var signaturePad = new SignaturePad(canvas);
		console.log(signaturePad);

		$scope.$watch('vm.signature');

		vm.clearCanvas = function() {
			signaturePad.clear();
		}

		vm.saveCanvas = function() {
			var sigImg = signaturePad.toDataURL();
			vm.signature = sigImg;
		}

	}]);
}());