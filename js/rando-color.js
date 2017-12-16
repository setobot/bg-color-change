var colorsArr = [];
function getRandomColor() {
    var color;
	//----- create random color -----
    var ranColor = function () {
	    var colorx = '#';
	    var letters = '0123456789ABCDEF';
	    for (var i = 0; i < 6; i++ ) {
	    	colorx += letters[Math.floor(Math.random() * 16)];
	    }
	    // ----- If color is NOT in the Array, retern color, otherwise rerun the ranColor Function -----
	    if (!colorsArr.includes(colorx)) {
	    	return colorx;
	    } else {
	    	var sp =	document.createElement('LI');
	    	var txt = document.createTextNode(colorx + ' was a duplicate.');
	    	sp.appendChild(txt)
	    	document.getElementById('dupes').appendChild(sp);
	    	ranColor();
	    	return;
	    }
    };
	//----- Push Color to Array ------
    colorsArr.push(ranColor());
	//----- Select Last pushed color in Array -----
    color = colorsArr[colorsArr.length - 1];

    return color;
}

setInterval(function() { 
	var element = document.getElementsByTagName("BODY")[0];
	element.style.backgroundColor = getRandomColor();
}, 2000);
