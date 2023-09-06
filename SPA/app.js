let links = document.querySelectorAll("a");
let main = document.querySelector('main')
links.forEach(link => {
    link.addEventListener("click", () => {
        let archivo = link.id + '.html';
        history.pushState(null, "", link.id);
        let response = httpRequest(archivo);
        response.addEventListener('load', () => {
            if(response.status === 200){
                main.innerHTML = response.responseText;
            }
        })
    })
});

let pagina_inicial = httpRequest('home.html')
pagina_inicial.addEventListener("load", () => {
    if(pagina_inicial.status === 200){
        main.innerHTML = pagina_inicial.responseText;
    }
})

function httpRequest(url, metodo){
    let http_metodo = metodo || 'GET';
    let http = new XMLHttpRequest();
    http.open(http_metodo, url)
    http.send()
    return http;
}

window.addEventListener("popstate",() => {
    let url = location.pathname.split("SPA/")[1] + '.html';
    let response = httpRequest(url);
    response.addEventListener('load', () => {
        if(response.status === 200){
            main.innerHTML = response.responseText;
        }
    })
    console.log(url);
})

function cargarData(){
    let tableRow = document.getElementById("data");
    let rawData = httpRequest("people.json");
    rawData.addEventListener("load", () => {
        const formatted = JSON.parse(rawData.responseText);
        formatted.forEach(personaje => {
            tableRow.innerHTML += `<tr><td>${personaje.name}</td>
            <td>${personaje.birth_year}</td>
            <td>${personaje.gender}</td>
            <td>${personaje.url}</td></tr>`
        })
    })
}