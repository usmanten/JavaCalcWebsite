function add() {
    const num1 = Number(document.form1.txtNum1.value);
    const num2 = Number(document.form1.txtNum2.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
        return;
    }

    document.form1.txtSum.value = num1 + num2;
}

function subtract() {
    const num1 = Number(document.form1.txtNum1.value);
    const num2 = Number(document.form1.txtNum2.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
        return;
    }

    document.form1.txtSum.value = num1 - num2;
}

function multiply() {
    const num1 = Number(document.form1.txtNum1.value);
    const num2 = Number(document.form1.txtNum2.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
        return;
    }

    document.form1.txtSum.value = num1 * num2;
}

function divide() {
    const num1 = Number(document.form1.txtNum1.value);
    const num2 = Number(document.form1.txtNum2.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
        return;
    }

    if (num2 === 0) {
        alert("You cannot divide by 0. Try another number.");
        return;
    }

    document.form1.txtSum.value = num1 / num2;
}
