

function calculateInsurance() {
	var Johnny = ["John", "20", "Austria", "150"];

	var res = (Johnny[3]*100/Johnny[1]+150);

	return res;
}

document.getElementById("result").innerHTML = calculateInsurance()

