// showNotification
const showNotification = (msg, type) => {
    let bgColor;
    switch (type) {
        case "success":
            bgColor = "linear-gradient(to right, #1D976C, #93F9B9)"
            break;
        case "error":
            bgColor = "linear-gradient(to right, #93291e, #ed213a)"
            break;
        default:
            break;
    }

    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: bgColor,
        },
        onClick: function () { } // Callback after click
    }).showToast();

}


// show output function 
const showOutput = output => document.getElementById("output").innerHTML = output;

// Clear Output 
const clearOutput = () => {
    let html = " "
    showOutput(html)
}

// Original String Date 
let nowDate = new Date()
document.getElementById("original-string").innerHTML = nowDate;

// footer year 
let year = nowDate.getFullYear()
document.getElementById("year").innerHTML = year;

// --------------------------------------------------------------------------------------------------------


// Get Name Of Day
const getnameofDay = () => {
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursdays", "Friday", "Satursay"]
    let tillNow = new Date()
    let day = tillNow.getDay()
    let dayName = daysOfWeek[day]
    showOutput(dayName)


}

// calculate days passed since i born 

const calculateDays = () => {
    let tillNow = new Date()
    let birthDate = new Date(document.getElementById("input").value)
    let tillNowTime = tillNow.getTime()
    let birthDateTime = birthDate.getTime()
    let msDifference = tillNowTime - birthDateTime;
    let daysPassed = msDifference / (1000 * 60 * 60 * 24)
    daysPassed = Math.floor(daysPassed)
    let html = `${daysPassed} days passed`;
    showOutput(html)

}

// when is your next birthday 
const nextBirthDay = () => {
    let today = new Date();
    let dateOfBirth = new Date(document.getElementById("input").value);
    let age = today.getFullYear() - dateOfBirth.getFullYear()
    let nextBD = new Date(today.getFullYear(), dateOfBirth.getMonth(), dateOfBirth.getDate())
    if (today > nextBD) {
        nextBD.setFullYear(today.getFullYear() + 1);
    }
    let oneDay = 1000 * 60 * 60 * 24;
    let dateDifference = nextBD.getTime() - today.getTime();
    let html = Math.ceil(dateDifference / oneDay);
    document.getElementById("output").innerHTML = `${html} days left`

}

// Greet user 
const greetUser = () => {
    let userName = prompt("please enter your name")
    if (!userName) {
        showNotification("please enter username", "error")
        return;
    }


    let tillNow = new Date()
    let hours = tillNow.getHours()
    if (hours >= 4 && hours < 12) {
        //  greetingMessage += " Morning " + userName
        display.innerHTML = "<span style='color:green'>Good Morning </span> " + "<span style='color:green'>" + " " + userName + "</span>";
    }
    else if (hours >= 12 && hours < 16) {
        // greetingMessage += " Afternoon " + userName
        display.innerHTML = "<span style='color:green'>Good Afternoon </span> " + "<span style='color:green'>" + " " + userName + "</span>";
    }
    else if (hours >= 16 && hours < 20) {
        // greetingMessage += " Evening " + userName
        display.innerHTML = "<span style='color:green'>Good Evening </span> " + "<span style='color:green'>" + " " + userName + "</span>";
    }
    else {
        // greetingMessage += " Night " + userName ;
        display.innerHTML = "<span style='color:green'>Good Night </span> " + "<span style='color:green'>" + " " + userName + "</span>";

    }
}

// Tell Time 
const telltime = () => {
    let tillNow = new Date()
    let hours = tillNow.getHours()
    let minutes = tillNow.getMinutes()
    let seconds = tillNow.getSeconds()
    let html = `you clicked this button @ ${hours}:${minutes}:${seconds}<br />`;
    document.getElementById("output").innerHTML += html;
}

// Calculate Tax
const calculateTax = () => {
    let price = prompt("please enter price")
    if (!price) {
        showNotification("please enter price", "error")
        return;
    }
    if (price < 1000) {
        let tax = (price / 100) * 8
        tax = Math.round(tax)
        showOutput(tax)
    }
    else {
        let tax = (price / 100) * 17
        tax = Math.round(tax)
        showOutput(tax)
    }
}

// Calculate GST

const calculateTotalPrice = () => {
    let price = prompt("please enter price")
    if (!price) {
        showNotification("please enter price", "error")
        return;
    }
    if (price < 1000) {
        let tax = price * (8 / 100)
        let totalPrice = Number(price) + tax;
        totalPrice = Math.round(totalPrice)
        showOutput(totalPrice)
    }
    else {
        let tax = price * (17 / 100);
        let totalPrice = Number(price) + tax;
        totalPrice = Math.round(totalPrice)
        showOutput(totalPrice)
    }

}