const _ = require("lodash");
const biblioteca = require("./biblioteca");

/*
1) Sumar las hojas de todos los libros y dividir ese numero por la cantidad de titulos.
*/
function promedioDePaginas(){
let pags = biblioteca.map(({paginas}) => paginas);
  console.log("El promedio de paginas es: ");
  return _.sumBy(pags)/pags.length;
}
promedioDePaginas();


/*
2) Es una lecturaObligatoria si:
   autor: "Stephen King" || titulo: "Eragon" || titulo: "Fundación"
*/
function esLibroObligatorio(libro) {
  return libro.autor === "Stephen King" || 
         libro.titulo === "Eragon" || 
         libro.titulo === "Fundación";
}

function lecturaObligatoria() {
  console.log("Las lecturas obligatorias son: ");
  return _.filter(biblioteca, esLibroObligatorio);
}
lecturaObligatoria();


/*
3) La biblioteca es fantasiosa si:
   autor: "Christopher Paolini" || autor: "Neil Gaiman"
*/
function esAutorFantasioso(libro) {
    return libro.autor === "Neil Gaiman" || libro.autor === "Christopher Paolini";
}

function esFantasiosa() {
    console.log("Biblioteca fantasiosa: ");
    return _.some(biblioteca, esAutorFantasioso);
}
esFantasiosa();


/*
4) Será el nombre de todos los títulos juntos, sacándole las vocales.
*/
function sinVocales(libro){
  return libro.titulo.replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ\s]/g, '');
}

function nombreDeLaBiblioteca() {
  console.log("El nombre de la biblioteca sin vocales es: ");
  return _.map(biblioteca, sinVocales).join(",");
}
nombreDeLaBiblioteca();


/*
5) Será ligera si todas sus lecturas tienen <= 40 paginas.
*/
function esLibroLigero(libro){
    return libro.paginas <= 40;
}

function bibliotecaLigera() {
    let filtroPaginas = _.every(biblioteca, esLibroLigero);
    console.log('Biblioteca ligera:');
    return filtroPaginas;
}
bibliotecaLigera();


/*
6) Obtener el genero del libro:
- Terror -> autor: Stephen King
- Manga -> nacionalidadAutor: Japonés
- Cómics -> paginas < 40
- No calificado -> TODO EL RESTO!
*/
function genero(){}
genero();