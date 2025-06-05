//Trabalho Web Scrpaing: httpbin.org 
function teste() {
    fetch("https://httpbin.org/html")
        .then(resp => {
          if (resp.status !== 200) {
            throw new Error("Problemas no servidor");
          }
          return resp.text();
        })
    .then(text => {
          let d = new DOMParser();
          let doc = d.parseFromString(text, "text/html");
          pegarTitulo(doc);
        })
    .catch(err => {
          document.querySelector("#res").innerHTML = err.message;
        });
    }

function pegarTitulo(doc) {
    let titulo = doc.querySelector("h1");
    document.querySelector("#res").innerHTML = "Título: " + titulo.textContent;
}

function testeParagrafo() {
    fetch("https://httpbin.org/html")
        .then(resp => {
            if (resp.status !== 200) {
                throw new Error("Problemas no servidor");
            }
            return resp.text();
        })
        .then(text => {
            let a = new DOMParser();
            let doc = a.parseFromString(text, "text/html");
            pegarParagrafo(doc);
        })
        .catch(err => {
            document.querySelector("#res").innerHTML = err.message;
        });
}

function pegarParagrafo(doc) {
    let p = doc.querySelector("p");
    document.querySelector("#res").innerHTML = "Parágrafo: " + p.textContent;
}

function main() {
    document.querySelector("#btn").addEventListener("click", teste);
    document.querySelector("#btnP").addEventListener("click", testeParagrafo);
}

window.onload = main;