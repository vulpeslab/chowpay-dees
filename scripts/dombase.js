
const iosOk = document.getElementById('ios-ok');
const create_r = document.getElementById('waiterBtn');
const shuffler = document.getElementById('shuffleBal');
const cBal = document.getElementById('customBal');
const clearBtn = document.getElementById('clrFormBtn');

const successView = document.getElementById('success_main');
const dashboardView = document.getElementById('dashboard_main');
const waiterView = document.getElementById('butler');

const profileNameEntry = document.getElementById('displayName');
const profileNameHolder = document.getElementById('displayNameOBJ');

let cafe;
let amt;



shuffler.addEventListener('click', function(){
    // Generate a random balance.
    let min = 20.0;
    let max = 3000.0;
    let nairaBal = Math.ceil(Math.random() * (max - min) + min) + '0';

    // Pass the value into the form ready for submission
    cBal.value = nairaBal;
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

clearBtn.addEventListener('click', function(){
    document.getElementById('cafes').value = "";
    document.getElementById('cashbar').value = "";
    profileNameEntry.value = "";
    cBal.value = "";

});

create_r.addEventListener('click', function (){
    waiterView.style.display = 'none';

    const cfBal = document.getElementById('customBal');
    useBal = numberWithCommas(cfBal.value) +'.00';
    localStorage.setItem("feedingBal", useBal);
    
    cafe = document.getElementById('cafes').value;
    amt = document.getElementById('cashbar').value;
    localStorage.setItem("currentCafe", cafe);
    localStorage.setItem("currentAmount", amt);

    document.getElementById('venue').innerHTML = cafe;
    document.getElementById('cost').innerHTML = '&#8358;' + amt;

    

    let profileNameData = profileNameEntry.value;
    localStorage.setItem("currentUser", profileNameData);
    profileNameHolder.innerHTML = profileNameData;
});



iosOk.addEventListener("click", function () {
    let dbIntent = document.getElementById('right-ctrl');
        dbIntent.checked = true;

    successView.style.display = 'none';
    dashboardView.style.display = 'block';
})