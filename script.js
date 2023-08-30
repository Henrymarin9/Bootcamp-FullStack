let input = document.getElementById("texto");
const upperCaseRegex = /^[A-Z ]+$/gm
const lowerCaseRegex = /^[a-z ]+$/gm
const dateRegex = /[1-9]{2}\/[0-9]{2}\/[1-9]{4}/gm
// input.addEventListener("change", (e) => {
    
// });

function checkValue(e){
    let valorTexto = e.target.value;

    if(upperCaseRegex.test(valorTexto)) {
        console.log("Todo Mayusculas!")
    }
    else if(lowerCaseRegex.test(valorTexto)){
        console.log("Todo Minusculas!")
    }
    else{
        console.log("Mezcla de ambas")
    }
}

function checkDate(e){
    let fecha = e.target.value;
    if(dateRegex.test(fecha)){
        console.log("Fecha Valida!")
    }

    else{
        console.log("Fecha no valida : (")
    }
}