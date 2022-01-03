const {promedioDePaginas, lecturaObligatoria, esFantasiosa, nombreDeLaBiblioteca, bibliotecaLigera, genero} = require("./HoraDeLectura");
require("should");

describe("Test", () => {
    describe("Promedio De Paginas", () => {
        it("Deberia devolver el promedio de las paginas", () => promedioDePaginas().should.be.eql(475.75) );
    });

    describe("Genero", () => {
        it("Deberia devolver el genero para el titulo (El visitante)", () => genero({
			titulo: "El visitante",
			autor: "Stephen King",
			nacionalidadAutor: "Estadounidense",
			paginas: 592
		}).should.be.eql("Terror") );
    });

    describe("lecturaObligatoria", () => {
        it("Deberia devolver las lecturas obligatorias", () => lecturaObligatoria().should.be.eql([
			  {
			    titulo: 'El visitante',
			    autor: 'Stephen King',
			    nacionalidadAutor: 'Estadounidense',
			    paginas: 592
			  },
			  {
			    titulo: 'Fundación',
			    autor: 'Isaac Asimov',
			    nacionalidadAutor: 'Estadounidense',
			    paginas: 230
			  },
			  {
			    titulo: 'Eragon',
			    autor: ' Christopher Paolini',
			    nacionalidadAutor: 'Estadounidense',
			    paginas: 544,
			    saga: 'Eragon'
			  },
			  {
			    titulo: 'Eldest',
			    autor: ' Christopher Paolini',
			    nacionalidadAutor: 'Estadounidense',
			    paginas: 704,
			    saga: 'Eragon'
			  },
			  {
			    titulo: 'Brisignr',
			    autor: ' Christopher Paolini',
			    nacionalidadAutor: 'Estadounidense',
			    paginas: 700,
			    saga: 'Eragon'
			  },
			  {
			    titulo: 'Legado',
			    autor: ' Christopher Paolini',
			    nacionalidadAutor: 'Estadounidense',
			    paginas: 811,
			    saga: 'Eragon'
			  }
        ])  );
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