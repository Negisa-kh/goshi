const successPage =document.querySelector('.success-message')
const defaultFormBody = document.getElementById('default-form')
const formElements = document.getElementById('form-elements')


formElements.addEventListener('submit', function (event) {
    event.preventDefault()
    const inputEmail = document.getElementById('email-address')
    emailValue = inputEmail.value
    // console.log(emailValue)
    defaultFormBody.innerHTML = successPage
    const emailSpan = document.getElementById('email-span')
    emailSpan.textContent = emailValue
})




//log in
let usernameMessage = document.querySelector('.username-validation')
let passwordMessage = document.querySelector('.password-validation')

let usernameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')

function usernameValidation () {
    if (usernameInput.value.length < 12) {
        usernameMessage.style.color = 'red'
        usernameMessage.innerHTML = 'Must Contain 12 Character (Min)'
        usernameMessage.style.display = 'block'
    } else {
        usernameMessage.style.color = 'green'
        usernameMessage.innerHTML = 'Correct Username Value'
    }
}

function passwordValidation () {
    if (passwordInput.value.length < 8) {
        passwordMessage.style.color = 'red'
        passwordMessage.innerHTML = 'Must Contain 8 Character (Min)'
        passwordMessage.style.display = 'block'
    } else {
        passwordMessage.style.color = 'green'
        passwordMessage.innerHTML = 'Correct Password Value'
    }
}




//loading
const loaderElem = document.querySelector('.loader')

window.addEventListener('load', function () {
   
    loaderElem.className += ' hidden' 

})