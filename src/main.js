// controla todo el dom

import datadericky from './data/rickandmorty/rickandmorty.js';

const divroot = document.getElementById("root") //estudiar

//estudiar

let acumuladorDehtml = ""

datadericky.results.forEach(function(unoporunodelospersonajesderesult) {
    acumuladorDehtml += generatorHTML(unoporunodelospersonajesderesult)

    divroot.innerHTML = acumuladorDehtml
        //console.log(unoporunodelospersonajesderesult.name) // en vez de imprimir en consola mejor imprimamos en html
})

function generatorHTML(characterData) {
    let html =
        `<div class="perrito-feo-bonito-que-ladra">
            <img src = "${characterData.image}"/>
            <p> ${characterData.name}</p>
            <p> ${characterData.status}</p>
            <p> ${characterData.type}</p>
            <p> ${characterData.gender}</p>
            <p>Origin: ${characterData.origin.name}</p>
            <p>Location: ${characterData.location.name}</p>
        </div>        
    `
    return html
}