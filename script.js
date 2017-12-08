function price() {

	var power = document.forms["costs"]["power"].value;
	var age = document.forms["costs"]["age"].value;

	var insurance = Number(power) * 100 / Number(age) + 150;

	return insurance

	}

document.getElementById("calculate").addEventListener("click", price,false);

document.getElementById("result").innerHTML= price();