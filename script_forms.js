if (navigator.userAgent.includes("Firefox")) {
    const sideColumns = document.querySelectorAll(".column-reversed")
    sideColumns.forEach((col) => {
        col.classList.add("column-reversed-firefox")
    })
}

const fname = document.getElementById('prenom')
const lname = document.getElementById('nom')
const nameDisplay = document.querySelector("#nameDisplay i")

const date = document.getElementById("date")
const birthdayDateDisplay = document.getElementById("birthdayYear")
const ageDisplay = document.getElementById("age")

let today = new Date()

const email = document.getElementById("email")
const validEmail = document.getElementById("validEmail")
const invalidEmail = document.getElementById("invalidEmail")

email.addEventListener("input", () => {
    checkEmail(email.value);
})

fname.addEventListener("input", () => {
    updateNameDisplay()
    drawName()
})
lname.addEventListener("input", () => {
    updateNameDisplay()
    drawName()
})
date.addEventListener("input", () => {
    updateDateDisplay();
    updateAgeDisplay();
})

function updateNameDisplay() {
    nameDisplay.textContent = fname.value + " " + lname.value
}

function updateDateDisplay() {
    birthdayDateDisplay.textContent = new Date(date.value).getFullYear()
}

function updateAgeDisplay() {
    let datedate = new Date(date.value)
    let age = today.getFullYear() - datedate.getFullYear()

    tdmonth = today.getMonth()
    bdmonth = datedate.getMonth()

    if (tdmonth < bdmonth || (tdmonth === bdmonth && today.getDate() < datedate.getDate())) {
        age--
    }

    console.log(age)
    ageDisplay.textContent = age
}

function checkEmail(input) {
    const validRegexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
    if (input.match(validRegexEmail)) {
        validEmail.style.display = "inline"
        invalidEmail.style.display = "none"
    } else {
        invalidEmail.style.display = "inline"
        validEmail.style.display = "none"
    }
}