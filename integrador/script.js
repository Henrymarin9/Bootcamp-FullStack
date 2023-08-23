const nameRegex = /^[A-Z]\D*$/gm;
const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm;
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
    e.preventDefault();
    let nombre = e.target[0].value;
    nombre = sanitize(nombre);
    let lastName = e.target[1].value;
    lastName = sanitize(lastName);

    let email = e.target[2].value;
    validateEmail(email);
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
        console.log("Email Valido!")
    }
    else{
        console.log("Email no valido")
    }

}
