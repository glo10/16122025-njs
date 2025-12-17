import { mkdir, writeFile } from "node:fs";
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
const dirOrFileName = `${firstName}_${lastName}`
// Création du fichier JSON
writeFile(`${dirOrFileName}.json`, data, (err) =>  {
  if(!err) console.log('JSON OK')
  else console.error('JSON KO', err)
})

// Création du dossier, idéalement ici pour
mkdir(dirOrFileName, (err) => {
  if(!err) console.log('Dir OK')
  else console.error('Dir KO', err)
})
console.info(`Bonjour ${firstName} ${lastName}`);
app.close();
