//  Create variables
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');

const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('division');

const answer = document.getElementById('answer');

const clear = document.getElementById('clear');

// Event Listeners

addition.addEventListener('click', () => {
    const value1 = input1.value;
    const value2 = input2.value;
    answer.textContent = Number(value1) + Number(value2);
    value1.textContent = '';
    value2.textContent = '';
});

subtraction.addEventListener('click', () => {
    const value1 = input1.value;
    const value2 = input2.value;
    answer.textContent = Number(value1) - Number(value2);
    value1.textContent = "";
    value2.textContent = "";
});

multiplication.addEventListener('click', () => {
    const value1 = input1.value;
    const value2 = input2.value;
    answer.textContent = Number(value1) * Number(value2);
    value1.value = "";
    value2.value = "";
});

division.addEventListener('click', () => {
    const value1 = input1.value;
    const value2 = input2.value;
    answer.textContent = Number(value1) + Number(value2);
    value1.textContent = "";
    value2.textContent = "";
});

clear.addEventListener('click', () => {
    input1.value = "";
    input2.value = "";
    answer.textContent = "0";
});