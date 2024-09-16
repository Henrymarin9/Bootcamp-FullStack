const nameRegex = /^[A-Z]\D*$/gm;
const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm;
let validationSummary = document.getElementById("validationSummary");
function openMenu(){
    let links = document.getElementById('links');
    if(links.style.display == 'flex'){
        links.style.display = "none";
    }
    else{
        links.style.display = 'flex';
    }
}


let form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    validationSummary.innerHTML = "";
    e.preventDefault();

    let nombre = e.target[0].value;
    let lastName = e.target[1].value;
    if(nombre.length > 0 && lastName.length > 0){
        nombre = sanitize(nombre);
        lastName = sanitize(lastName);
    }
    else{
        validationSummary.innerHTML += "<li>El campo nombre y apellisdo son requeridos.</li>";
    }

    let email = e.target[2].value;
    if(!validateEmail(email)){
        validationSummary.innerHTML += "<li>El Email tiene que estar en un formato valido EJ: 'ventas@gmail.com'</li>";
    }
})

function sanitize(inputValue){
    let sanitizedValue = inputValue.trim();
    // se fije si la primer leta es mayuscula.
    if(sanitizedValue.match(nameRegex)){
        return sanitizedValue;
    }
    else{
        let reconstrcutedString = "";
        for(let i = 0; i < sanitizedValue.length; i++){
            if(i == 0){
                reconstrcutedString += sanitizedValue[i].toUpperCase();
            }
            else{
                reconstrcutedString += sanitizedValue[i];
            }
        }
        return reconstrcutedString;
    }
}

function validateEmail(email){
    if(email.match(mailRegex)){
        return true;
    }
    else{
        return false;
    }

}
