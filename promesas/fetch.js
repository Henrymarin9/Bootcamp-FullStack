// https://jsonplaceholder.typicode.com/posts/1
// let respuesta;
// async function funcionAsincrona(){
//     respuesta = await fetch('https://portfolio-918ec-default-rtdb.firebaseio.com/prueba.json')
//     .then((response) => response.json())
//     .then(json => respuesta = json)
//     console.log(respuesta)
// }

// funcionAsincrona();

fetch('https://portfolio-918ec-default-rtdb.firebaseio.com/prueba.json', {
    method:'POST',
    body: JSON.stringify({
        title:"Probando con EdIt",
        body:"lorem",
        userId:1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
.then((response) => response.json())
.then((json) => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:'DELETE',
// })
// .then((response) => console.log("DELETE: ", response))

