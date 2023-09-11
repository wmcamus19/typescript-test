const subscribeCheckBox = document.getElementById(
		'id-subscribe-checkbox'
	) as HTMLInputElement,
	getCheckbox: HTMLInputElement = document.querySelector(
		'#id-subscribe'
	) as HTMLInputElement;

subscribeCheckBox.onclick = function () {
	if (subscribeCheckBox.checked) {
		getCheckbox.textContent = 'Unsubscribe';
		console.log('Unsubscribe');
	} else {
		console.log('Subscribe');
	}
};

const mastercardRadio = document.getElementById(
		'id-radio-mastercard'
	) as HTMLInputElement,
	visaRadio = document.getElementById('id-radio-visa') as HTMLInputElement,
	gcashRadio = document.getElementById('id-radio-gcash') as HTMLInputElement,
	kidneyRadio = document.getElementById('id-radio-kidney') as HTMLInputElement;

mastercardRadio.onclick = function () {
	console.log('You choose Mastercard.');
};

visaRadio.onclick = function () {
	console.log('You choose Visa.');
};

gcashRadio.onclick = function () {
	console.log('You choose GCash.');
};

kidneyRadio.onclick = function () {
	console.log('You choose Kidney.');
};
