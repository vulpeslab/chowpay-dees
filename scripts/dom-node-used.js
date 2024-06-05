
function UsedReceiptView() {
    let uuid = localStorage.getItem("currentUUID");
    let usedDate = localStorage.getItem("currentSessionDate");
    let usedLocation = localStorage.getItem("currentCafe");
    let usedAmount = localStorage.getItem("currentAmount");

    document.getElementById('used-txid').innerHTML = uuid;
    document.getElementById('used-date').innerHTML = usedDate;
    document.getElementById('used-cafe').innerHTML = usedLocation;
    document.getElementById("used-cost").innerHTML = '&#8358;' + usedAmount;
}

UsedReceiptView();