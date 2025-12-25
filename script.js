let display = document.getElementById("display");
let current = "";

function add(value) {
    if (display.innerText === "0") {
        current = value;
    } else {
        current += value;
    }
    display.innerText = current;
}

function clearAll() {
    current = "";
    display.innerText = "0";
}

function toggleSign() {
    if (current) {
        current = (parseFloat(current) * -1).toString();
        display.innerText = current;
    }
}

function calculate() {
    try {
        current = eval(current).toString();
        display.innerText = current;
    } catch {
        display.innerText = "Error";
        current = "";
    }
}
