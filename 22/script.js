let form = document.querySelector("form");
let nombre = document.getElementById("nombre");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let valor = nombre.value;
    let longitud = valor.length;
    if(longitud < 3){
        //...
        console.log("Validacion")
        nombre.setCustomValidity("El largo minimo es de 3 caracteres")
    }
    else{
        nombre.setCustomValidity('')
    }
    nombre.reportValidity()
})