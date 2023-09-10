"use strict";
/* id-increase
id-count
id-decrease */
let count = 0, increaseCount, resetCount, decreaseCount;
// document.getElementById('id-increase').addEventListener('click', increaseCount);
// document.getElementById('id-decrease').addEventListener('click', decreaseCount);
// document.getElementById('id-count').addEventListener('click', resetCount);
document.getElementById('id-increase').onclick = function () {
    count += 1;
    increaseCount = document.getElementById('id-count');
    increaseCount.value = String(count);
};
document.getElementById('id-count').onclick = function () {
    count = 0;
    resetCount = document.getElementById('id-count');
    resetCount.value = String(count);
};
document.getElementById('id-decrease').onclick = function () {
    count -= 1;
    decreaseCount = document.getElementById('id-count');
    decreaseCount.value = String(count);
};
