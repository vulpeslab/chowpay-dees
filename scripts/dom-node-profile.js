function generateRandom(min = 0, max = 100) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

const getMatricNumber = () => {
    let matricYears = ["20","21","22","23"];
    let matricYear = matricYears[generateRandom(0, matricYears.length)];
    let matricID = generateRandom(12000, 21000);

    let matricNumber = "LCU/UG/"+ matricYear + "/" + matricID;
    return matricNumber;

};

const getMiddlename = () => {
    const middleNamesList = ["Alex","Ashley","Charlie","Jessie","Damilola"];
    return middleNamesList[generateRandom(0, middleNamesList.length)]

    
};

const getEmail = () => {
    let userName = localStorage.getItem("currentUser");
    let userCompleteName = userName.split(" ");
    let emailName = userCompleteName[0].substring(0, 1).toLowerCase() + userCompleteName[1].toLowerCase() + "0" + generateRandom(0, 9);
    let emailAddress = emailName + "@vlps.labs";

    return emailAddress;
};

function ProfileRoute() {
    let userProfileName = localStorage.getItem("currentUser");
    console.log(userProfileName);
    let userFullName = userProfileName.split(" ");
    let userFirstName = userFullName[0];
    let userLastName = userFullName[1];

    document.getElementById("profile-user").innerHTML = userProfileName;
    document.getElementById("profile-matric").innerHTML = getMatricNumber();
    document.getElementById("usr_firstname").value = userFirstName;
    document.getElementById("usr_lastname").value = userLastName;
    document.getElementById('usr_othername').value = getMiddlename();
    document.getElementById('usr_email').value = getEmail();
    document.getElementById('usr_nextdate').value = " ";
    }

ProfileRoute();