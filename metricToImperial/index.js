/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

i need a convert function that takes input val and converst to the three diff units and renders innerhtml of the components
*/
const inputSection = document.querySelector("#input-area")
const convertBtn = document.querySelector("#convert-btn")
const lengthDiv = document.querySelector("#length")
const volumeDiv = document.querySelector("#volume")
const massDiv = document.querySelector("#mass")

convertBtn.addEventListener("click", function convert() {
    if(inputSection.value){
    let inputVal = inputSection.value
    const length = (Number(inputVal) * 3.281).toFixed(3)
    const volume = (Number(inputVal) * 0.264).toFixed(3)
    const mass = (Number(inputVal) * 2.204).toFixed(3)
    lengthDiv.innerHTML = `<h3>${length} feet</h3>`
    volumeDiv.innerHTML = `<h3>${volume} gallons</h3>`
    massDiv.innerHTML = `<h3>${mass} pounds</h3>` 
}})






