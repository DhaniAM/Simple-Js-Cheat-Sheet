//window.alert()
document.querySelector(".alert").addEventListener("click", alertFunction);
function alertFunction() {
	alert("Warning!!! (Just kidding)"); // or window.alert("Warning")
}

//console.log()
document.querySelector(".consoleLog").addEventListener("click", consoleLogFunction);
function consoleLogFunction() {
	console.log("doing console log");
}

//window.print()
document.querySelector(".print").addEventListener("click", printPage);
function printPage() {
	window.print(); //or print()
}