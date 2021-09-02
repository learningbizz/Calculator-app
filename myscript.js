
let bill = 0, tip = np = 0;

function reset() {
    /*
    Three things have to happen:
    1. Bill and Number of People go back to 0
    2. Select Tip gets reseted (back to default)
    3. Tip amount and total reset to 0 -> Automatic?
    */
    
}


function selectTip(button) {
    //reset outline in Number of People
    document.getElementById('F2').style.outline = null;

    bill = document.getElementById('F1').value;
    np = document.getElementById('F2').value;
    //STOPPED HERE! getting the name of the button that was clicked
    tip = (button.textContent).slice(0,-1);

    if(np == 0)
        nperror();

    console.log(bill);
    console.log(tip);
    console.log(np);

    let tipAmount = ((bill/100)*tip)/np;
    let totalAmount = bill/np + tipAmount;
    tipAmount = Math.trunc(tipAmount*100)/100;
    totalAmount = Math.round(totalAmount*100)/100;

    document.querySelector(".tipPrice").textContent = "$" + tipAmount;
    document.querySelector(".totalPrice").textContent = "$" + totalAmount;

}

function nperror() {
    document.getElementById('F2').style.outline = "solid #FF1111"
    //falta aqui poner el error
}