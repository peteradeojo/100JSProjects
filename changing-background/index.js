const bgChanger = document.getElementById('changeBG');
const bgPane = document.getElementById('display');

const colors = ['red', 'blue', 'aliceblue', 'darkgreen', 'yellow', 'orange', 'pink'];

bgChanger.addEventListener('click', () => {
	const randomCol = Math.floor(Math.random() * colors.length);
	document.getElementById('info').innerHTML = `Color ${randomCol + 1}: ${colors[randomCol]}`;
	bgPane.style.backgroundColor = colors[randomCol];
});
