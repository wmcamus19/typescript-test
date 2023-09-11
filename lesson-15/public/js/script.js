"use strict";
const subscribeCheckBox = document.getElementById('id-subscribe-checkbox'), getCheckbox = document.querySelector('#id-subscribe');
subscribeCheckBox.onclick = function () {
    if (subscribeCheckBox.checked) {
        getCheckbox.textContent = 'Unsubscribe';
        console.log('Unsubscribe');
    }
    else {
        console.log('Subscribe');
    }
};
const mastercardRadio = document.getElementById('id-radio-mastercard'), visaRadio = document.getElementById('id-radio-visa'), gcashRadio = document.getElementById('id-radio-gcash'), kidneyRadio = document.getElementById('id-radio-kidney');
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
