import { mkdir, writeFile } from "node:fs";
import { access } from "node:fs/promises";
import { createInterface } from "node:readline/promises";

const app = createInterface({
  input: process.stdin,
  output: process.stdout
});

const firstName = await app.question("Votre prénom ? ");
const lastName = await app.question("Votre nom ? ");

const data = JSON.stringify({
  firstName,
  lastName,
})
const directory = `users`
// Générer un nom de fichier aléatoire pour respecter RGPD
const filename = Math.ceil(Math.random() *10000)
// Création du fichier JSON
writeFile(`${directory}/${filename}.json`, data, (err) =>  {
  if(!err) console.log('Write OK')
  else console.error('Write KO', err)
})

// Création du dossier, idéalement faire la gestion du dossier qui existe déjà
mkdir(directory, (err) => {
  if(!err) console.log('Dir OK')
  else console.error('Dir KO', err)
})
console.info(`Bonjour ${firstName} ${lastName}`);
app.close();
