const colorInputs = document.querySelectorAll("#colorMixer input")
const mixerDisplay = document.getElementById("mixerDisplay")

colorInputs.forEach((input) => {
    input.addEventListener("change", () => {
        let baseColor = undefined
        let red_list = []
        let blue_list = []
        let green_list = []
        colorInputs.forEach((button) => {
            if (button.checked) {
                if (baseColor === undefined) {
                    baseColor = button.value;
                } else {
                    const baseColor_r = baseColor.substring(0,2);
                    const baseColor_g = baseColor.substring(2,4);
                    const baseColor_b = baseColor.substring(4,6);

                    const r = button.value.substring(0,2);
                    const g = button.value.substring(2,4);
                    const b = button.value.substring(4,6);
                    red_list.push(r)
                    green_list.push(g)
                    //

                    


                    debugger
                }
            }
        })
        //parseInt(baseColor_r, 16), parseInt(r, 16)
        const result_r = average(red_list);
        //const result_g = average([parseInt(baseColor_g, 16), parseInt(g, 16)]);
        //const result_b = average([parseInt(baseColor_b, 16), parseInt(b, 16)]);
        
        baseColor = "rgb(" + 
                        result_r + ',' +
                        result_g + ',' +
                        result_b + ',' + 
                    ")";

        mixerDisplay.style.backgroundColor = baseColor
    })
})

function average(vals) {
    return vals.reduce((acc, next) => acc + next) / vals.length;

    /*
    let acc = 0
    for (let i = 0 ; i< vals.length; ++i) {
        acc += vals[i];
    } 
    return acc / vals.length
    */
}