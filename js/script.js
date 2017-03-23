function Phone(mark, price, colour, dualSim) {
	this.marka = mark;
	this.cena = price;
	this.kolor = colour;
	this.dualSim = dualSim;
}

Phone.prototype.printInfo = function() {
	var message = 'Marka telefonu to ' + this.mark + ', kolor to ' + this.colour + ', cena to ' + this.price + ' zł';

	if(this.dualSim) {
		message += ' oraz posiada dualSim.';
		console.log(message);

	} else {
		message += ' oraz nie posiada dualSim.';
		console.log(message);
	}	
}

var iPhone6S = new Phone('Apple', 2250, 'srebrny', 'dualSim');
var samsungGalaxyS6 = new Phone('Samsung', 1500, 'złoty');
var onePlusOne = new Phone('OnePlus', 1300, 'czarny', 'dualSim'); 

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();