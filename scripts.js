document.onkeydown = function(e) {
	e = e || window.event;
	document.getElementById("key").textContent = "Key/Action: " + e.key;
	document.getElementById("keycode").textContent = "Key code: " + e.keyCode;
	document.getElementById("keylocation").textContent = "Key location: " + e.location;
}
