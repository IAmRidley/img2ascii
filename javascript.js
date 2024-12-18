console.log("test");

var width = 128;
var height = 64;

var asciiArray = [];

function test() {

	let file = imgIn.files[0];
	console.log(file);
	
	let url = "";
	preview.src = url = URL.createObjectURL(file);

}

function scale() {

	let cnvs = document.getElementById("cnvs");
	let ctx = cnvs.getContext("2d");

	let img = document.getElementById("preview");

	cnvs.width = width;
	cnvs.height = height;

	ctx.drawImage(img, 0, 0, width, height);

	pixelsToASCII()

}

function avgToChar(k) {

	//  .:-=+*#%@

	k = Math.floor((k / 255) * 10);
	
	switch (k) {
		case 0:
			return '@';
		case 1:
			return '@';
		case 2:
			return '%';
		case 3:
			return '#';
		case 4:
			return '*';
		case 5:
			return '+';
		case 6:
			return '=';
		case 7:
			return '-';
		case 8:
			return ':';
		case 9:
			return '.';
		default:
			return '.';
	}

}

function pixelsToASCII() {

	cnvs = document.getElementById("cnvs");
	ctx = cnvs.getContext("2d");

	let imgData = ctx.getImageData(0,0,cnvs.width,cnvs.height);

	let data = imgData.data;

	let r = 0;
	let g = 0;
	let b = 0;
	let a = 0;

	let avg = 0;

	for (let i = 0; i < data.length; i += 4) {

		r = data[i];
		g = data[i + 1];
		b = data[i + 2];
		a = data[i + 3];

		avg = Math.floor((r + g + b + a) / 4);

		asciiArray.push(avgToChar(avg));
		
	}

	disTest();

}

function disTest() {

	let dis = document.getElementById("dis");
	let arrayIter = 0;

	for (let i = 0; i < height; i++) {

		for (let j = 0; j < width; j++) {
			dis.innerHTML += asciiArray[arrayIter];
			arrayIter++;
		}
		dis.innerHTML += "<br/>";

	}

}