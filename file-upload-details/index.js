// const fileInfoDiv =

document.getElementById('file').addEventListener('change', function () {
	const file = this.files[0];
	let text = `<p>Name: ${file.name}</p>`;
	text += `<p>Size: ${Math.floor(file.size / 1024)} KB</p>`;
	text += `<p>Type: ${file.type}</p>`;
	document.getElementById('file-info').innerHTML = text;
});
