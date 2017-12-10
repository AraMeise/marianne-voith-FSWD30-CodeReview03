document.getElementById("calculate").addEventListener("click",calculateInsurance)
document.getElementById("result").innerHTML = calculateInsurance()

function calculateInsurance() {

	var age = document.forms["costs"]["age"].value;
	var power = document.forms["costs"]["power"].value;
	

	var insurance = Number(power) * 100 / Number(age) + 150;

	return insurance;
}