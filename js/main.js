
//http://tizen.org/feature/sensor.stress_monitor
//http://tizen.org/feature/sensor.activity_recognition
//http://tizen.org/feature/sensor.sleep_monitor
//http://tizen.org/feature/sensor.sleep_monitor
//http://tizen.org/feature/location.batch
//http://tizen.org/feature/sensor.heart_rate_monitor
//http://tizen.org/feature/sensor.wrist_up			
//http://tizen.org/feature/sensor.pedometer
			
function onchangeCB(sensorData){
	var test = document.getElementById("HR");
	
	
//	test.innerHTML=sensorData.lightLevel;
	var sensor=tizen.systeminfo.getCapability("http://tizen.org/feature/sensor.heart_rate_monitor");
	if(sensor == true)
		test.innerHTML="can";
	else
		test.innerHTML="can't";
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