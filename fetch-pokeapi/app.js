function getRandomInt(){
    return Math.floor(Math.random() * (150 - 1)) + 1;
}
document.addEventListener("DOMContentLoaded",()=>{
    let pokemonId = getRandomInt()
    fetchData(pokemonId);
    // getPokemons
    // .then(value => {
    //     console.log(value);
    //     mostrarInfo(value);
    // })
})

function fetchData(id){
    // const http = new XMLHttpRequest();
    // const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    // http.open("GET",url)
    // http.send();

    // http.onreadystatechange = () => {
    //     let data = JSON.parse(http.responseText);

        
    // }

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response)=> response.json())
    .then((data)=>{
        const pokemon = {
            nombre: data.name,
            experiencia: data.base_experience,
            hp: data.stats[0].base_stat,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            especial:data.stats[3].base_stat,
            img: data.sprites.other.dream_world.front_default,
        }
        mostrarInfo(pokemon)
    })
}

function mostrarInfo(pokemon){
    document.querySelector(".card-body-img").setAttribute("src", pokemon.img)
    document.querySelector(".card-body-title").innerHTML =`${pokemon.nombre}
    <span>${pokemon.hp} hp</span>`
    document.querySelector(".card-body-text").innerText = pokemon.experiencia + ' Exp';
    document.querySelectorAll(".card-footer-social h3")[0].innerText = pokemon.ataque;
    document.querySelectorAll(".card-footer-social h3")[1].innerText = pokemon.especial;
    document.querySelectorAll(".card-footer-social h3")[2].innerText = pokemon.defensa;
}

// const getPokemons = new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest();
//     const url = `https://pokeapi.co/api/v2/pokemon/26`
//     http.open("GET",url)
//     http.send();
    
//     http.onreadystatechange = () => {
//         let data = JSON.parse(http.responseText);

//         const pokemon = {
//             nombre: data.name,
//             experiencia: data.base_experience,
//             hp: data.stats[0].base_stat,
//             ataque: data.stats[1].base_stat,
//             defensa: data.stats[2].base_stat,
//             especial:data.stats[3].base_stat,
//             img: data.sprites.other.dream_world.front_default,
//         }
//         // mostrarInfo(pokemon)
//         resolve(pokemon)
//     }
// })