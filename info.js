var amount, year, rate;
function changeamount(){
    amount = document.getElementById("lblamount").value;
    document.getElementById("txtloan").innerHTML = `<b> &#8377;${amount}<b/>`;
}
function changeyear(){
    year = document.getElementById("lblyear").value;
    document.getElementById("txtyear").innerHTML = `<b>${year}<b/>`;
}
function changerate(){
    rate = document.getElementById("lblrate").value;
    document.getElementById("txtrate").innerHTML = `<b>${rate}%<b/>`;
}
function changesuccuss(){
    var p = parseFloat(amount);
    var n = parseInt(year) * 12;
    var r = parseFloat(rate)/12/100;
    var EMI =  p * r / (1- (Math.pow(1/(1 + r), n)));
    document.getElementById("result").innerHTML = `
       You EMI amount is &#8377; <b>${Math.round(EMI)}</b> per month
    `;

}