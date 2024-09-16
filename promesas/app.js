const promesa = new Promise((finalizar,reject) => {
    setTimeout(()=>
    {
        finalizar("Exito!")
    },2000)
})
document.addEventListener('DOMContentLoaded',()=>{
    promesa
    .then( valor =>{
    const pokemon = valor;
    console.log(pokemon)
    })
    .catch(err => {
        console.log(err)
    })
})

http.onReadyStateChange () => {
    http.responseText
}

