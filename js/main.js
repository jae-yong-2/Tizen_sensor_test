

function onchangeCB(sensorData){
	var test = document.getElementById("HR");
	
	
//	test.innerHTML=sensorData.lightLevel;
	var sensor=tizen.systeminfo.getCapability("http://tizen.org/feature/sensor.heart_rate_monitor");
	if(sensor == true)
		test.innerHTML="t";
	else
		test.innerHTML="f";
}
function onsuccessCB() {
    console.log('Light sensor service has started successfully.');
}


function init(){
	document.addEventListener('tizenhwkey', function(e) {
      if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
  });
	var lightSensor = tizen.sensorservice.getDefaultSensor("LIGHT");
	lightSensor.setChangeListener(onchangeCB);
	lightSensor.start(onsuccessCB);
	
	
	
}

window.onload = init();

//
//window.onload = function () {
//    // TODO:: Do your initialization job
//
//    // add eventListener for tizenhwkey
//    document.addEventListener('tizenhwkey', function(e) {
//        if(e.keyName == "back")
//	try {
//	    tizen.application.getCurrentApplication().exit();
//	} catch (ignore) {
//	}
//    });
//
//    // Sample code
//    var textbox = document.querySelector('.contents');
//    textbox.addEventListener("click", function(){
//    	box = document.querySelector('#textbox');
//    	box.innerHTML = box.innerHTML == "Basic" ? "Sample" : "Basic";
//    });
//    
//};
