const http = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";
http.open("GET",url);
http.send();

http.onreadystatechange = (e) => {
    console.log(http.responseText);
}
