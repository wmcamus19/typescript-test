let textPrompt: any = window.prompt('Enter your name: ');
document.getElementById('result')!.textContent = textPrompt;

document.getElementById('btn-submit')!.onclick = function () {
	let firstName: HTMLInputElement = document.getElementById(
		'firstname'
	)! as HTMLInputElement;
	document.querySelector('#result')!.textContent = firstName.value;
};
