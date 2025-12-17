// Pour cette demo, lancer le programme node index.mjs prenom nom age
console.log("variables d'environnement", process.env)
console.log('OS', process.env.OS)
if(process.env.OS.toUpperCase() == 'WINDOWS_NT') {
    console.log('uniquement pour Windows')
}
console.log("Nombre d'arguments passé lors de l'appel de Node", process.argv)
const firstname = process.argv[2]
const lastname = process.argv[3]
const age = process.argv[4]
const argUndefined = process.argv[5]

console.log('data from script args', firstname, lastname, age, argUndefined)