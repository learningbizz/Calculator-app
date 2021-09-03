
let bill = 0, tip = np = 0;

function reset() {
    /*
    Three things have to happen:
    1. Bill and Number of People go back to 0
    2. Select Tip gets reseted (back to default)
    3. Tip amount and total reset to 0 -> Automatic?
    */

    //Point 1
    document.getElementById('F1').value = 0;
    document.getElementById('F2').value = 0;
    document.getElementById('F2').style.outline = null;
    document.getElementById("errornp").innerHTML = "";


    //Point 2


    //Point 3
    document.querySelector(".tipPrice").textContent = "$0.00";
    document.querySelector(".totalPrice").textContent = "$0.00";

    
}


function selectTip(button) {
    //reset Number of People
    document.getElementById('F2').style.outline = null;
    document.getElementById("errornp").innerHTML = "";


    bill = document.getElementById('F1').value;
    np = document.getElementById('F2').value;
    //STOPPED HERE! getting the name of the button that was clicked
    tip = (button.textContent).slice(0,-1);

    if(np == 0) {
        nperror();   
    }
    else {
            
        let tipAmount = ((bill/100)*tip)/np;
        let totalAmount = bill/np + tipAmount;
        tipAmount = Math.trunc(tipAmount*100)/100;
        totalAmount = Math.round(totalAmount*100)/100;

        document.querySelector(".tipPrice").textContent = "$" + tipAmount;
        document.querySelector(".totalPrice").textContent = "$" + totalAmount;
    }
}

function nperror() {
    document.getElementById('F2').style.outline = "solid #C8826D"
    document.getElementById("errornp").innerHTML = "Can't be zero";
}