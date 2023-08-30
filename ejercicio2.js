window.addEventListener("load", function (event) {
    let count = 0;
    let links = document.getElementsByTagName("a");

    console.log("Hay esta cantidad de links en el texto: ",links.length);
    console.log("Este es el link del anteultimo anchor: ",links[links.length-1].href) 
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        if(link.href == 'http://prueba/'){
            count++;
        }
    }
    console.log("Estos son todos los que apuntan a prueba: ", count);


    let parrafos = document.getElementsByTagName("p");
    let tercerParrafo = parrafos[2];
    let linksTercerParrafo = tercerParrafo.getElementsByTagName("a");
    console.log("En el tercer parrafo hay: ", linksTercerParrafo.length);
});