/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 

// document.getElementById("box").textContent = boxEl
let convertEl =document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-btn")
let volumeEl = document.getElementById("volume-btn")
let massEl = document.getElementById("mass-btn")

// boxEl.innerHTML = `<h3 onclick='convert()'></h3>`

// function convert() {
//     boxEl.textContent += "<p>Thank you</p>"
// }


function length(valNum) {
    let meter = 3.281 * valNum
    let feet = 1/3.281 * valNum
    let liter = 0.264 * valNum 
    let gallon = 1/0.264 * valNum
    let pound = 2.204 * valNum
    let kilo = 1/2.204 * valNum
    // console.log(`${boxEl} meters = ${meter} feet`)
    lengthEl.innerHTML = `
                <h3>
                Length (Meter/Feet)
                </h3>
                <p>
                    ${valNum} meters = ${meter.toFixed(3)} feet | ${valNum} feet = ${feet.toFixed(3)}  meters
                </p>`
    //VOLUME SECTION    
    volumeEl.innerHTML = `
                <h3>
                Volume (Liters/Gallons)
                </h3>
                <p>
                    ${valNum} liters = ${liter.toFixed(3)} gallon | ${valNum} gallon = ${gallon.toFixed(3)}  liters
                </p>`
    //MASS SECTION
     massEl.innerHTML = `
                <h3>
                Mass (Kilograms/Pounds)
                </h3>
                <p>
                    ${valNum} kilo = ${pound.toFixed(3)} pound | ${valNum} pound = ${kilo.toFixed(3)}  kilo
                </p>`
    
}


// convertEl.addEventListener("click", length() {
    
// } )