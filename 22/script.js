let form = document.querySelector("form");
let nombre = document.querySelector("#nombre");
let error = document.querySelector("#errores");
nombre.willValidate = true;
let errores;
form.addEventListener("submit",(e)=>{
    errores = ''

    e.preventDefault();
    let valor = nombre.value;
    let longitud = valor.length;
    if(longitud < 3){
        errores += "<li>El largo minimo es de 3 caracteres</li>"
    }
    else{
        nombre.setCustomValidity("")
    }
    error.innerHTML = errores

})