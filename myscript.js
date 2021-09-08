
// np = number people
let bill = 0, buttonTip = np = 0;

const customTip = document.getElementById('custom');

customTip.addEventListener('input', selectCustomTip);

function reset() {
    /*
    Two things have to happen:
    1. Bill and Number of People go back to 0
    2. Tip amount and total reset to 0 -> Automatic?
    */

    //Point 1
    document.getElementById('F1').value = 0;
    document.getElementById('F2').value = 0;
    document.getElementById('F1').style.outline = null;
    document.getElementById('F2').style.outline = null;
    document.getElementById("errornp").innerHTML = "";
    document.getElementById("errorbill").innerHTML = "";
    document.getElementById('custom').value = "";

    //Point 3
    document.querySelector(".tipPrice").textContent = "$0.00";
    document.querySelector(".totalPrice").textContent = "$0.00";


}


function selectTip(button) {
    //reseting np & bill and text size of area of calculation if it was too large
    document.getElementById('F2').style.outline = null;
    document.getElementById("errornp").innerHTML = "";
    document.getElementById('F1').style.outline = null;
    document.getElementById("errorbill").innerHTML = "";
    document.querySelector(".tipPrice").style.fontSize = "42px";
    document.querySelector(".totalPrice").style.fontSize = "42px";


    bill = document.getElementById('F1').value;
    np = document.getElementById('F2').value;
    if (button == null)
        buttonTip = customTip.value;
    else
        buttonTip = (button.textContent).slice(0, -1);

    if (np <= 0 || bill < 0) {
        error();
    }
    else {

        let tipAmount = ((bill / 100) * buttonTip) / np;
        let totalAmount = bill / np + tipAmount;
        tipAmount = Math.trunc(tipAmount * 100) / 100;
        totalAmount = Math.round(totalAmount * 100) / 100;


        if (tipAmount <= 10000) {
            document.querySelector(".tipPrice").textContent = "$" + tipAmount;
            document.querySelector(".totalPrice").textContent = "$" + totalAmount;
        }
        else {
            document.querySelector(".tipPrice").style.fontSize = "x-large";
            document.querySelector(".totalPrice").style.fontSize = "x-large";
            document.querySelector(".tipPrice").textContent = "You generous person! :D";
            document.querySelector(".totalPrice").textContent = "Just leave your house keys.";
        }
    }
}

function selectCustomTip() {
    selectTip(null);
}

function error() {
    if(np <= 0) {
        document.getElementById('F2').style.outline = "solid #C8826D"
        if (np < 0) 
            document.getElementById("errornp").innerHTML = "Can't be negative!";
        else
        document.getElementById("errornp").innerHTML = "Can't be zero";
    }
    if (bill < 0) {
        document.getElementById('F1').style.outline = "solid #C8826D"
        document.getElementById("errorbill").innerHTML = "Can't be negative!";

    }
}