let sideA: HTMLInputElement,
	sideB: HTMLInputElement,
	sideC: number = 0;

document.getElementById('id-calculate')!.onclick = function () {
	sideA = document.getElementById('id-side-a')! as HTMLInputElement;
	sideB = document.getElementById('id-side-b')! as HTMLInputElement;
	sideC = Math.sqrt(
		Math.pow(Number(sideA.value), 2) + Math.pow(Number(sideA.value), 2)
	);
	document.querySelector('#side-a')!.textContent = String(sideA.value);
	document.querySelector('#side-b')!.textContent = String(sideB.value);
	document.querySelector('#side-c')!.textContent = String(sideC);
};
