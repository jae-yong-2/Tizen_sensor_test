
//http://tizen.org/feature/sensor.stress_monitor
//http://tizen.org/feature/sensor.activity_recognition
//http://tizen.org/feature/sensor.sleep_monitor
//http://tizen.org/feature/sensor.sleep_monitor
//http://tizen.org/feature/location.batch
//http://tizen.org/feature/sensor.heart_rate_monitor
//http://tizen.org/feature/sensor.wrist_up			
//http://tizen.org/feature/sensor.pedometer
			
window.onload = function(){
	var test = document.getElementById("HR");
	
//	test.innerHTML=sensorData.lightLevel;
	var sensor=tizen.systeminfo.getCapability("http://tizen.org/feature/sensor.heart_rate_monitor");
	if(sensor == true)
		test.innerHTML="can";
	else
		test.innerHTML="can't";
};