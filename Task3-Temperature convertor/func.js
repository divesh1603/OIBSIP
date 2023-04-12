function convert() {
	let temperature = document.getElementById("temperature").value;
	let convert = document.getElementById("convert").value;

	if (convert === "celsius") {
		let fahrenheit = (temperature * 9/5) + 32;
		document.getElementById("result").value = fahrenheit.toFixed(2) + " °F";
	} else {
		let celsius = (temperature - 32) * 5/9;
		document.getElementById("result").value = celsius.toFixed(2) + " °C";
	}
}
