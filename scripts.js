document.onkeydown = function(e) {
	e = e || window.event;
	document.getElementById("key").innerHTML = "Key/Action: " + e.key;
	document.getElementById("keycode").innerHTML = "Key code: " + e.keyCode;
	document.getElementById("keylocation").innerHTML = "Key location: " + e.location;
}