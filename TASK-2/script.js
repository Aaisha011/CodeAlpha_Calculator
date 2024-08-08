function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function clearAll() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        let display = document.getElementById('display');
        display.value = eval(display.value);
    } catch (error) {
        alert('Invalid Expression');
    }
}