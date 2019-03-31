'use strict';


var outputMsg = document.getElementById('textMsg');
var outputTmp = document.getElementById('textTemp');

var buttonCes;
var buttonFht;

var tempCes;
var tempFhr;


outputMsg.innerHTML = ' "Click the button! I acout degrees..." ' + '<br><br>' + outputMsg.innerHTML; 

buttonCes = document.getElementById('btnCes');
buttonFht = document.getElementById('btnFht');

btnCes.addEventListener('click', function() {

	var tempCes = window.prompt('What is the temperature in degrees Celsius?');	


		if (isNaN(tempCes)) {outputMsg.innerHTML = " It' not a temperature !!! " } 

		else {
		    
		    if (tempCes>'15') {
		    	outputMsg.innerHTML = 'Jest bardzo przyjemnie' + outputMsg.innerHTML;
		    }
		    if ('15'>tempCes>'10') {
		        outputMsg.innerHTML = 'Ubierz kurtkę' + outputMsg.innerHTML;
		    } 
		    else {
		        outputMsg.innerHTML = '"Bez czapki i szalika się nie obejdzie"';
		 	}

		 	outputTmp.innerHTML = '"Temperature is '+ ((tempCes*1.8)+32) +'  F"';
		} 

})