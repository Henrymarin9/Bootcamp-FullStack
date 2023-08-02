// window.addEventListener('load', () => {console.log("cargo")})
// document.addEventListener('load', () => {console.log("cargo")});
let errores = document.getElementById("errores");
let nombre = ''
function verificarNombre(event) {
    if(event.target.value != '')
        nombre = event.target.value
}
let apellido = ''
function verificarApellido(event) {
    if(event.target.value != '')
        apellido = event.target.value
}

let password = ''
function verificarContraseña(event){
    if(event.target.value.length <= 8){
        errores.innerText = "La contraseña, tiene que tener 8 caracteres"
    }
    else
        errores.innerText = ""
}

let email = ''
function capturarMail(event){
    email = event.target.value;
}
function registrarme(){
    let output = document.getElementById("output")
    output.innerHTML = `<h1>${nombre}</h1><h1>${apellido}</h1><h3>${email}</h3>`;
}
