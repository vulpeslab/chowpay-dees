
const zeroIndexCard = document.getElementById("index-zero-tx");



zeroIndexCard.addEventListener("click", () => {
    window.parent.location.href = "https://vulpeslab.github.io/chowpay-dees/menu/used.html";
});

function generateRandom(min = 0, max = 100) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference); 
    rand = rand + min;

    return rand;
}

const randomizeCafeteria = () => {
    const availableCafe = [ "Burger & Bread",
                            "Tasty Vine Kitchen", 
                            "Your Choice Kitchen", 
                            "Tasty Delight", 
                            "Cresta", 
                            "Marigold Kitchen", 
                            "Main Royale Cafeteria" ];
    const randomCafe = availableCafe[generateRandom(0, availableCafe.length)];
    return randomCafe;
};

const randomizeDate = () => {
    // Set start and end dates
    const startDate = new Date(2024, 2, 1); // Year, Month (0-indexed), Day
    const endDate = new Date();

    const timeDifference = endDate.getTime() - startDate.getTime();
    const randomDayOffset = Math.floor(Math.random() * timeDifference) / (1000 * 60 * 60 * 24);
    const randomDate = new Date(startDate.getTime() + randomDayOffset * (1000 * 60 * 60 * 24));
    const formattedDateParts = randomDate.toDateString().split(' ');
    formattedDateParts[0] = formattedDateParts[0].substring(0, 3); // Shorten weekday to 3 letters
    return formattedDateParts.join(' ');
};

function randomizeTime(dateStr) {
    // Parse the date string
    const date = new Date(dateStr);
  
    // Set the hour range (9am to 9pm)
    const minHour = 9;
    const maxHour = 21;
  
    // Generate random hour and minute values within the specified range
    const hour = Math.floor(Math.random() * (maxHour - minHour + 1)) + minHour;
    const minute = Math.floor(Math.random() * 60);
    const second = Math.floor(Math.random() * 60);
  
    // Set the random time on the date object
    date.setHours(hour, minute, second, 0); // milliseconds set to 0
  
    // Format the random time string in 24 hour format (hh:mm:ss)
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).substring(0, 8);
  }
  
  const randomTime = randomizeTime(randomizeDate());
  console.log(randomTime);
  

const randomizeCost = () => {
    let unitCost = generateRandom(10, 250)
    let tensCost = unitCost.toString() + "0";

    return tensCost;
};

function setCards() {
    document.getElementById("card-cafe2").innerHTML = randomizeCafeteria();
    document.getElementById("card-date2").innerHTML = randomizeDate().substring(0, randomizeDate().length - 4) + randomizeTime(randomizeDate()) + " 2024";
    document.getElementById("card-cost2").innerHTML = "&#8358;" + randomizeCost()

    document.getElementById("card-cafe3").innerHTML = randomizeCafeteria();
    document.getElementById("card-date3").innerHTML = randomizeDate().substring(0, randomizeDate().length - 4) + randomizeTime(randomizeDate()) + " 2024";
    document.getElementById("card-cost3").innerHTML = "&#8358;" + randomizeCost()

    document.getElementById("card-cafe4").innerHTML = randomizeCafeteria();
    document.getElementById("card-date4").innerHTML = randomizeDate().substring(0, randomizeDate().length - 4) + randomizeTime(randomizeDate()) + " 2024";
    document.getElementById("card-cost4").innerHTML = "&#8358;" + randomizeCost()

    document.getElementById("card-cafe5").innerHTML = randomizeCafeteria();
    document.getElementById("card-date5").innerHTML = randomizeDate().substring(0, randomizeDate().length - 4) + randomizeTime(randomizeDate()) + " 2024";
    document.getElementById("card-cost5").innerHTML = "&#8358;" + randomizeCost()

    document.getElementById("card-cafe6").innerHTML = randomizeCafeteria();
    document.getElementById("card-date6").innerHTML = randomizeDate().substring(0, randomizeDate().length - 4) + randomizeTime(randomizeDate()) + " 2024";
    document.getElementById("card-cost6").innerHTML = "&#8358;" + randomizeCost()

    document.getElementById("card-cafe7").innerHTML = randomizeCafeteria();
    document.getElementById("card-date7").innerHTML = randomizeDate().substring(0, randomizeDate().length - 4) + randomizeTime(randomizeDate()) + " 2024";
    document.getElementById("card-cost7").innerHTML = "&#8358;" + randomizeCost()

    document.getElementById("card-cafe8").innerHTML = randomizeCafeteria();
    document.getElementById("card-date8").innerHTML = randomizeDate().substring(0, randomizeDate().length - 4) + randomizeTime(randomizeDate()) + " 2024";
    document.getElementById("card-cost8").innerHTML = "&#8358;" + randomizeCost()

    document.getElementById("card-cafe9").innerHTML = randomizeCafeteria();
    document.getElementById("card-date9").innerHTML = randomizeDate().substring(0, randomizeDate().length - 4) + randomizeTime(randomizeDate()) + " 2024";
    document.getElementById("card-cost9").innerHTML = "&#8358;" + randomizeCost()

    document.getElementById("card-cafe10").innerHTML = randomizeCafeteria();
    document.getElementById("card-date10").innerHTML = randomizeDate().substring(0, randomizeDate().length - 4) + randomizeTime(randomizeDate()) + " 2024";
    document.getElementById("card-cost10").innerHTML = "&#8358;" + randomizeCost()
}

setCards();
