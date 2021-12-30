const _ = require("lodash");
const datos = require("./biblioteca");

/*
1) Sumar las hojas de todos los libros y dividir ese numero por la cantidad de titulos.
*/
let sumaTotal = _.sumBy(datos, function(suma) { return suma.paginas/datos.length; })
console.log("El promedio de paginas de nuestra biblioteca es de: " + sumaTotal);


/*
2) Es una lecturaObligatoria si:
   autor: "Stephen King" || titulo: "Eragon" || titulo: "Fundación"
*/
function eslecturaObligatoria() {
   let filtro = _.filter(datos, function (x) {
    if (
      x.autor === "Stephen King" ||
      x.titulo === "Eragon" ||
      x.titulo === "Fundación"
    ) {
      return x;
    }
  });
  return filtro;
  }

function lecturaObligatoria() {
  console.log("Las lecturas obligatorias son: ");
  return eslecturaObligatoria();
}
lecturaObligatoria();


/*
3) La biblioteca es fantasiosa si:
   autor: "Christopher Paolini" || autor: "Neil Gaiman"
*/
function esAutorFantasioso(){
  return _.some(datos, e => e.autor === "Neil Gaiman" || e.autor === "Christopher Paolini");
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
	let concatenarTitulos = _.map(datos, r => r.titulo).join("").replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ\s]/g, '');
	console.log("El nombre de la biblioteca sin vocales es: ", concatenarTitulos);
}
nombreDeLaBiblioteca();


/*
5) Será ligera si todas sus lecturas tienen <= 40 paginas.
*/
function bibliotecaLigera(){
	let filtroPaginas = _.every(datos, g => g.paginas <= 40);
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
function genero(){
	let definirGenero = _.find(datos, l => {
		if(l.autor === "Stephen King"){
			console.log("El genero de esta lectura es: TERROR", l)
		}
		else if(l.nacionalidadAutor === "Japonés"){
			console.log("El genero de esta lectura es: MANGA", l)
		}
		else if(l.paginas < 40){
			console.log("El genero de esta lectura es: COMICS", l)
		}
	})
			console.log("El genero de las demas lecturas es: NO CALIFICADO")
}
genero();