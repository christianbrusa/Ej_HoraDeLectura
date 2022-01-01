const _ = require("lodash");
const biblioteca = require("./biblioteca");

/*
1) Sumar las hojas de todos los libros y dividir ese numero por la cantidad de titulos.
*/
let sumaTotal = _.sumBy(biblioteca, function(suma) { return suma.paginas/biblioteca.length; })
console.log("El promedio de paginas de nuestra biblioteca es de: " + sumaTotal);


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
function esAutorFantasioso(){
  return _.some(biblioteca, e => e.autor === "Neil Gaiman" || e.autor === "Christopher Paolini");
}

function esFantasiosa() {
  console.log("Biblioteca fantasiosa: ");
  return esAutorFantasioso();
}
esFantasiosa();


/*
4) Será el nombre de todos los títulos juntos, sacándole las vocales.
*/
function nombreDeLaBiblioteca(){
  let concatenarTitulos = _.map(biblioteca, r => r.titulo).join("").replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ\s]/g, '');
  console.log("El nombre de la biblioteca sin vocales es: ", concatenarTitulos);
}
nombreDeLaBiblioteca();


/*
5) Será ligera si todas sus lecturas tienen <= 40 paginas.
*/
function bibliotecaLigera(){
  let filtroPaginas = _.every(biblioteca, g => g.paginas <= 40);
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