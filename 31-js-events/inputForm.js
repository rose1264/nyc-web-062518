

const nameElement  = document.getElementById("greeting-field");
const greetingElement = document.getElementById("name-field");
const formElement = document.getElementById("greeting-form");

console.log("right here")

formElement.addEventListener( 'submit', event => {
    event.preventDefault()
    const greetingMsg = greetingElement.value
    const name = nameElement.value
    console.log(`${name} says ${greetingMsg}`)
} )

nameElement.addEventListener( 'keydown', event => {

    const nameValue = nameElement.value
    console.log(nameValue)
} )