function initBalance() {
    const showBal = document.getElementById("studentBal");
    let currentBal = localStorage.getItem("feedingBal");
    console.log(currentBal);

    showBal.innerHTML = "&#8358;" + currentBal;
  }

  initBalance();