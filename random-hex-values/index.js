const generateRandomHexes = () => {
	const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
	let hex = '';
	for (let i = 0; i < 6; i += 1) {
		let x = Math.floor(Math.random() * 16);
		hex += `${values[x]}`;
	}
	document.getElementById('display').style.backgroundColor = `#${hex}`;
	document.getElementById('info').innerHTML = hex.toUpperCase();
};

document.addEventListener('DOMContentLoaded', generateRandomHexes);
document.getElementById('changeBG').addEventListener('click', generateRandomHexes);
