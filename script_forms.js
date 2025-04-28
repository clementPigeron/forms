const fname = document.getElementById('prenom')
const name = document.getElementById('nom')
const nameDisplay = document.querySelector("#nameDisplay i")
const date = document.getElementById("date")
const birthdayDateDisplay = document.getElementById("birthdayYear")
const ageDisplay = document.getElementById("age")

let today = new Date()

fname.addEventListener("input", updateNameDisplay)
name.addEventListener("input", updateNameDisplay)
date.addEventListener("input", () => {
    updateDateDisplay();
    updateAgeDisplay();
})

function updateNameDisplay() {
    nameDisplay.textContent = fname.value+" "+name.value
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