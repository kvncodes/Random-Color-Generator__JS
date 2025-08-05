const button = document.querySelector("button");

const generatedColor = document.querySelector("p");

button.addEventListener("click", function () {
	const newColor = generateRandomColor();
	document.body.style.backgroundColor = newColor;
	generatedColor.innerText = newColor;
	generatedColor.style.color = newColor;
	button.style.color = newColor;
});

function generateRandomColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);

	return `rgb(${r},${g},${b})`;
}
