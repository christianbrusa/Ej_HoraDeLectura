const _ = require("lodash");
const biblioteca = require("./biblioteca");

/*
1) Sumar las hojas de todos los libros y dividir ese numero por la cantidad de titulos.
*/
function cantidadDePaginas(libro){
  return libro.paginas;
}

function cantidadDeLibros(){
  return biblioteca.length;
}

function promedioDePaginas(){
  return _.sumBy(biblioteca, cantidadDePaginas)/cantidadDeLibros();
}


/*
2) Es una lecturaObligatoria si:
   autor: "Stephen King" || titulo: "Eragon" || titulo: "Fundación"
*/
function esLibroObligatorio(libro) {
  return libro.autor === "Stephen King" || 
         libro.saga === "Eragon" || 
         libro.titulo === "Fundación";
}

function lecturaObligatoria() {
  return _.filter(biblioteca, esLibroObligatorio);
}


/*
3) La biblioteca es fantasiosa si:
   autor: "Christopher Paolini" || autor: "Neil Gaiman"
*/
function esAutorFantasioso(libro) {
    return libro.autor === "Neil Gaiman" || libro.autor === "Christopher Paolini";
}

function esFantasiosa() {
    return _.some(biblioteca, esAutorFantasioso);
}


/*
4) Será el nombre de todos los títulos juntos, sacándole las vocales.
*/
function tituloSinVocales(libro){
  return libro.titulo.replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ\s]/g, '');
}

function nombreDeLaBiblioteca() {
  return _.map(biblioteca, tituloSinVocales).join(",");
}


/*
5) Será ligera si todas sus lecturas tienen <= 40 paginas.
*/
function esLibroLigero(libro){
    return libro.paginas <= 40;
}

function bibliotecaLigera() {
    return _.every(biblioteca, esLibroLigero);
}

/*
6) Obtener el genero del libro:
- Terror -> autor: Stephen King
- Manga -> nacionalidadAutor: Japonés
- Cómics -> paginas < 40
- No calificado -> TODO EL RESTO!
*/
function genero(libro) {

  if(libro.autor === "Stephen King"){
    return "Terror";
  }
  else if(libro.nacionalidadAutor === "Japonés"){
    return "Manga";
  }
  else if(libro.paginas < 40){
    return "Cómics";
  }
  else{
    return "No calificado";
  }
}


module.exports = {promedioDePaginas, lecturaObligatoria, esFantasiosa, nombreDeLaBiblioteca,bibliotecaLigera, genero};