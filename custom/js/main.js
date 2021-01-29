"use strict";

document.getElementById('copy-code').addEventListener('click', () => {
	const copyText = document.getElementById('code').textContent;
	const elem = document.createElement('textarea');
	elem.value = copyText;
	document.body.appendChild(elem);
	elem.select();
	document.execCommand('copy');
	document.body.removeChild(elem);
	console.clear();
});
