let display = document.getElementById("display");
let press = new Audio("../sfx/keypress.mp3");

function playSound() {
    press.currentTime = 0;
    press.play();
}

function input(value) {
    playSound();
    display.value += value;
}

function clearDisplay() {
    playSound();
    display.value = "";
}

function calculate() {
    playSound();

    let expression = display.value;
    let operator = "";

    if (expression.includes("+")) {
        operator = "+";
    } else if (expression.includes("-")) {
        operator = "-";
    } else if (expression.includes("*")) {
        operator = "*";
    } else if (expression.includes("/")) {
        operator = "/";
    }

    let parts = expression.split(operator);

    let num1 = Number(parts[0]);
    let num2 = Number(parts[1]);

    let result = 0;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    }

    display.value = result;
}

document.addEventListener("keydown", function(event) {

    let key = event.key;

    if (!isNaN(key)) {
        playSound();
        input(key);
    }

    else if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/"
    ) {
        playSound();
        input(key);
    }

    else if (key === "Enter") {
        calculate();
    }

    else if (key === "Backspace") {
        playSound();
        display.value = display.value.slice(0, -1);
    }

    else if (key === "Escape") {
        clearDisplay();
    }

});