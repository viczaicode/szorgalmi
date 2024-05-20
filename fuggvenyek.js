import { emberekLISTA } from "./adat.js";
/* függvény - működik a hoisting - declaráció a hatóköre tetejére mászik */
kiir(emberekLISTA);
function kiir(lista) {
  for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    console.log(element);
    console.log(lista[index]);
  }
}
/* függvény kifejezés változónak adjuk értékül a függvényt
    nem működik a hoisting
*/
const kiir2 = function (lista) {
  for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    console.log(element);
    console.log(lista[index]);
  }
};
kiir2(emberekLISTA);

function kiir3(lista) {
  console.log("forEach csak listához használható");
  /*   lista.forEach((element, index) => {
    console.log(element, index);
  }); */
  lista.forEach(function (ember, i) {
    console.log(ember, i);
  });
}

kiir3(emberekLISTA);

/*  20 évnél idősebbek listázása */
function idosebb20(lista) {
  const idosebb20LISTA = lista.filter(function (ember) {
    return ember.kor > 20;
  });

  console.log(idosebb20LISTA);
}
idosebb20(emberekLISTA);

/* 20 évnél idősebb  férfiak lista */
function ferfiak(lista) {
  const ferfiakLISTA = lista.filter(function (ember) {
    return ember.nem && ember.kor > 20;
  });
  console.log(ferfiakLISTA);
}

ferfiak(emberekLISTA);

/*  lista rendezése kor szerint */
function rendez(lista) {
  console.log("RENDEZÉS ***************");
  lista.sort(function (e1, e2) {
    console.log(e1.kor, e2.kor, e2.kor - e1.kor);
    return e2.kor - e1.kor;
  });
  console.log(lista);
}
rendez(emberekLISTA);

/*  véletlen sorrendet kialakítása - elemek összekeverése */
function kever(lista) {
  console.log("Véletlen sorrend ***************");
  lista.sort(function () {
    return Math.random() - 0.5;
  });
  console.log(lista);
}
kever(emberekLISTA);
