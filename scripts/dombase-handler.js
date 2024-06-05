const btn_v = document.getElementById('vbtn');

function txID(){
    const prefix = '#63';
    const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

    var hexID = prefix + genRanHex(22);
    document.getElementById('txid').innerHTML = hexID;
    localStorage.setItem("currentUUID", hexID);
}

// Dynamic Date for Transcation Date
function txDate(){
    state = new Date();

    let dt = state.toDateString();
    let date = dt;

    var hours = state.getHours();
    var minutes = state.getMinutes();
    var seconds = state.getSeconds();

    let hrs = hours.toString().length < 2 ? hours.toString().padStart(2, "0") : hours;
    console.log(hrs, hrs.length);
    let mins = minutes.toString().length < 2 ? minutes.toString().padStart(2, "0") : minutes
    console.log(mins, mins.length);
    let secs = seconds.toString().length < 2 ? seconds.toString().padStart(2, "0") : seconds
    console.log(secs, secs.length);

    let tm =  hrs+':'+mins+':'+secs;
    var fyr = state.getFullYear();

    var dateTime = dt+' at '+tm;
    var dateTimeYear = date.substr(0, date.length - 4)+' '+tm+' '+fyr

    document.getElementById('date').innerHTML = dateTime; // Receipt Date Format
    localStorage.setItem("currentSessionDate", dateTime);
    localStorage.setItem("currentDate", dateTimeYear); // TX Date Format


}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

var load_time = getRandomNumber(2000, 4000);
console.log("load time: " + load_time);

btn_v.addEventListener("click", function () {
  btn_v.innerHTML = "";

  var outerDiv = document.createElement("div");
outerDiv.className = "cupertino flex justify-center";

var innerDiv1 = document.createElement("div");
innerDiv1.className = "ispinner";
innerDiv1.id = "cspin";

for (var i = 0; i < 8; i++) {
  var innerDiv2 = document.createElement("div");
  innerDiv2.className = "ispinner-blade";
  innerDiv1.appendChild(innerDiv2);
}

outerDiv.appendChild(innerDiv1);
btn_v.appendChild(outerDiv);

setTimeout(function(){
  var appTrans = document.getElementById('scaffold');
  appTrans.style.opacity = 0.60;

  var dg = document.getElementById('ios-box');
      dg.style.visibility = 'visible';
}, load_time);
})

const cd = document.getElementById('ios-ok');

cd.addEventListener("click", function () {
    var k = document.getElementById('cspin');
    k.style.visibility = 'hidden';

    var alt = document.getElementById('ios-box');
    alt.style.visibility = 'hidden';

    btn_v.innerHTML = 'Validate';

    var appContext = document.getElementById('scaffold');
    appContext.style.opacity = 1;
})

txID();
txDate();