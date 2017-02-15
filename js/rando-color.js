// Build the hex color code
function randomHexColor() {
    var values = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += values[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Run function every 10 seconds
setInterval(function() { 
	var element = document.getElementsByTagName("BODY")[0];
	element.style.backgroundColor = randomHexColor();
	console.log(randomHexColor());
}, 10000);