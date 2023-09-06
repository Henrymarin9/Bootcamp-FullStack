let links = document.querySelectorAll("a");
let main = document.querySelector('main')
links.forEach(link => {
    link.addEventListener("click", () => {
        let archivo = link.id + '.html';
        let response = httpRequest(archivo);
        response.addEventListener('load', () => {
            if(response.status === 200){
                main.innerHTML = response.responseText;
            }
        })
    })
});

function httpRequest(url, metodo){
    let http_metodo = metodo || 'GET';
    let http = new XMLHttpRequest();
    http.open(http_metodo, url)
    http.send()
    return http;
}