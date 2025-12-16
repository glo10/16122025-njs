// let et const introduit avec ES6 en 2015

//  const => constante, la valeur de la variable pi ne peut plus être modifié avec ce mot-clé
const pi = 3.14;
// la variable age peut être modifié
let age = 34;
// var l'ancienne façon de déclarer les variables
// scope = portée = les frontières dans lesquelles vos variables sont disponibles
// scope est délimité par des accolades {}
// var => scope function et s'il est déclaré tout en haut => scope globale

function helloVar() {
  var firstname = "Glodie";
  if (true) {
    var firstname = "Henry";
    console.log("firstname with var condition", firstname);
    for (let i = 0; i < 3; i++) {
      var firstname = "Marc";
      console.log("firstname with var loop", firstname);
    }
  }
  console.log("firstname with var top level", firstname);
}

function helloLet() {
  let firstname = "Glodie";
  if (true) {
    // variable différente (diff) de firstname au niveau de la fonction (fn)
    let firstname = "Marie";
    console.log("firstname with let or const condtion", firstname);
    for (let i = 0; i < 3; i++) {
        // erreur firstname n'est pas accessible car dans ce bloc il n'est pas encore initialisé
        // console.log('firstname before new assignement', firstname)
      // idem différent de celle de la condition et celle de la fn
      let firstname = "Sarah";
      console.log("firstname with let or const loop", firstname);
    }
  }
  console.log("firstname with let or const top level", firstname);
}

helloVar();
helloLet();
