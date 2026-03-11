let buttonLogin = document.querySelector('.confirm')
let input = document.querySelector('.input')

buttonLogin.addEventListener('click', function() {
   
    let value = input.value 

    if (value === 'Teacher') {
        window.location.href = "https://konstantinvilkovskis-crypto.github.io/E-diktant---student/"
    } else {
        window.location.href = "https://konstantinvilkovskis-crypto.github.io/E-diktant---student/"
    }
})