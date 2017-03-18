function Telefon(marka, cena, kolor, dualSim) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.dualSim = dualSim;
}

Telefon.prototype.printInfo = function() {
	var message = 'Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', cena to ' + this.cena + ' zł';

	if(this.dualSim) {
		message += ' oraz posiada dualSim.';
		console.log(message);

	} else {
		message += ' oraz nie posiada dualSim.';
		console.log(message);
	}	
}

var iPhone6S = new Telefon('Apple', 2250, 'srebrny', 'dualSim');
var samsungGalaxyS6 = new Telefon('Samsung', 1500, 'złoty');
var onePlusOne = new Telefon('OnePlus', 1300, 'czarny', 'dualSim'); 

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();