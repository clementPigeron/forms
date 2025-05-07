const canvas = document.getElementById("nameCanvas")
const ctx = canvas.getContext("2d")

ctx.font = "20px Arial";

function drawName() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillText(`${fname.value}`, 5, 50)
    ctx.fillText(`${lname.value}`, 5, 100)
}
