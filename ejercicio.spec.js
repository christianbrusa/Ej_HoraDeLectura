const {promedioDePaginas, lecturaObligatoria, esFantasiosa, nombreDeLaBiblioteca, bibliotecaLigera, genero} = require("./HoraDeLectura");
const {elVisitante, shingekiNoKyojin, fundación, sandman, eragon, eldest, brisignr, legado} = require("./libros");
require("should");

describe("Test", () => {
    describe("Promedio De Paginas", () => {
        it("Deberia devolver el promedio de las paginas", () => promedioDePaginas().should.be.eql(475.75) );
    });

    describe("Genero", () => {
        it("Deberia devolver el genero para el titulo (El visitante)", () => genero(elVisitante).should.be.eql("Terror") );
    });

    describe("lecturaObligatoria", () => {
        it("Deberia devolver las lecturas obligatorias", () => lecturaObligatoria().should.be.eql([
			  elVisitante,
			  fundación,
			  eragon,
			  eldest,
			  brisignr,
			  legado
			])
        );
    });

    describe("esFantasiosa", () => {
        it("Deberia devolver si la biblioteca es fantasiosa", () => esFantasiosa().should.be.true() );
    });

    describe("nombreDeLaBiblioteca", () => {
        it("Deberia devolver el nombre de todos los títulos juntos sin las vocales", () => 
        	nombreDeLaBiblioteca().should.be.eql("lvstnt,ShngknKyjncptl1,3y127,Fndcn,Sndmncptl5,10y12,rgn,ldst,Brsgnr,Lgd") );
    });

    describe("bibliotecaLigera", () => {
        it("Deberia devolver si la biblioteca es ligera", () => bibliotecaLigera().should.be.false() );
    });


});