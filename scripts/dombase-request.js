
function txDate(){
    let sessionDateTime = localStorage.getItem("currentDate");
    console.log(sessionDateTime);
    document.getElementById('txtime').innerHTML = sessionDateTime;

    let dataCafe = localStorage.getItem("currentCafe");
    let dataAmt = localStorage.getItem("currentAmount");
    document.getElementById('location').innerHTML = dataCafe;
    document.getElementById('chopprice').innerHTML = '&#8358;' + dataAmt;
}

        txDate();