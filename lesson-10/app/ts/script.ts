document.getElementById('id-roll')!.onclick = function () {
	let x: number = Math.floor(Math.random() * 6) + 1;
	let y: number = Math.floor(Math.random() * 6) + 1;
	let z: number = Math.floor(Math.random() * 6) + 1;
	document.querySelector('#roll-1')!.textContent = String(x);
	document.querySelector('#roll-2')!.textContent = String(y);
	document.querySelector('#roll-3')!.textContent = String(z);
};
