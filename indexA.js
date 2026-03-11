let buttonLogin = document.querySelector('.confirm')
let input = document.querySelector('.input')

buttonLogin.addEventListener('click', function() {
   
    let value = input.value 

    if (value === 'Teacher') {
        window.location.href = "file:///C:/Users/User/Documents/Projects/e-diktant(teacher)/indexB.html"
    } else {
        window.location.href = "https://konstantinvilkovskis-crypto.github.io/E-diktant---student/"
    }
})