const fname = document.getElementById('prenom')
const lname = document.getElementById('nom')
const nameDisplay = document.querySelector("#nameDisplay i")
const date = document.getElementById("date")
const birthdayDateDisplay = document.getElementById("birthdayYear")
const ageDisplay = document.getElementById("age")

let today = new Date()

fname.addEventListener("input", updateNameDisplay)
lname.addEventListener("input", updateNameDisplay)
date.addEventListener("input", () => {
    updateDateDisplay();
    updateAgeDisplay();
})

const colorInputs = document.querySelectorAll("#colorMixer input")
const mixerDisplay = document.getElementById("mixerDisplay")
let colorValue = 0

colorInputs.forEach((input) => {
    input.addEventListener("change", () => {
        if (input.checked) {
            colorValue += parseInt(input.value)
        } else {
            colorValue -= parseInt(input.value)
        }

        updateColorMixer()
    })
})

function updateNameDisplay() {
    nameDisplay.textContent = fname.value+" "+lname.value
}

function updateDateDisplay() {
    birthdayDateDisplay.textContent = new Date(date.value).getFullYear()
}

function updateAgeDisplay() {
    let datedate = new Date(date.value)
    let age = today.getFullYear() - datedate.getFullYear()

    tdmonth = today.getMonth()
    bdmonth = datedate.getMonth()

    if (tdmonth<bdmonth || (tdmonth===bdmonth && today.getDate()<datedate.getDate())) {
        age--
    }

    console.log(age)
    ageDisplay.textContent=age
}

function updateColorMixer() {
    console.log(colorValue);
    mixerDisplay.className = ''
    switch (colorValue) {
        case 1: mixerDisplay.classList.add("cyan"); console.log("oui");  break;
        case 3: mixerDisplay.classList.add("magenta");  break;
        case 6: mixerDisplay.classList.add("yellow");  break;
        case 4: mixerDisplay.classList.add("purple");  break;
        case 9: mixerDisplay.classList.add("coral");  break;
        case 7: mixerDisplay.classList.add("green");  break;
        case 10: mixerDisplay.classList.add("brown");  break;
    }
}