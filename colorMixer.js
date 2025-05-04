const colorInputs = document.querySelectorAll("#colorMixer input")
const mixerDisplay = document.getElementById("mixerDisplay")

colorInputs.forEach((input) => {
    input.addEventListener("change", () => {
        let baseColor = undefined
        let red_list = []
        let blue_list = []
        let green_list = []
        let checking = false

        colorInputs.forEach((button) => {
            if (button.checked) {
                const r = parseInt(button.value.substring(0,2), 16);
                const g = parseInt(button.value.substring(2,4), 16);
                const b = parseInt(button.value.substring(4,6), 16);
                red_list.push(r)
                blue_list.push(b)
                green_list.push(g)
                checking = true
            }
        })
        
        if (checking) {
            const result_r = average(red_list);
            const result_g = average(green_list);
            const result_b = average(blue_list);
            
            baseColor = "rgb(" + 
                            result_r + ',' +
                            result_g + ',' +
                            result_b + 
                        ")";
        } else {
            baseColor = "transparent"
        }
        
        mixerDisplay.style.backgroundColor = baseColor
    })
})

function average(vals) {
    return vals.reduce((acc, next) => acc + next) / vals.length;
}