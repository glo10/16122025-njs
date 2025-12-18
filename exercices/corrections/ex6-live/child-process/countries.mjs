import { get } from "node:https";
import { createWriteStream } from "node:fs";
import { LOCAL_FILENAME } from "../utils/constants.mjs";
import { deleteFileAndsendErrorToParent } from "../utils/functions.mjs";

/**
 * ici c'est le serveur qui va lancer le processus enfant en lui donnant l'URL
 *  => Le serveur va lancer le processus via node child_process/countries.mjs URL
 */
const url = process.argv[2];
console.log('url', url)
/**
 * Objectif: récupérer les données depuis le serveur distant => get()
 *  Et écrire par petit paquet (écriture progressive et pas d'un coup)
 *  => utilisation de createWriteStream
 */
get(url, (res) => {
  if (res.statusCode !== 200) {
    // process.send envoie l'erreur au processus parent
    process.send({
      error: `Erreur réception des données ${res.statusCode}, ${res.statusMessage}`,
    });
    return; // on va pas plus loin
  }
  const writeLocalFileStream = createWriteStream(LOCAL_FILENAME);
  res.pipe(writeLocalFileStream);
  // gestion des erreurs de notre flux local d'écriture
  writeLocalFileStream.on("error", (err) => {
    console.error("Erreur writeStream", err);
    deleteFileAndsendErrorToParent(LOCAL_FILENAME, err)
  });
  // Prévenir le processus parent quand l'écriture est terminé
  writeLocalFileStream.on("finish", () => {
    console.info('Fin de chargement du fichier en local depuis le serveur distant')
    process.send({ success: true });
  });
}).on("error", (err) => {
    deleteFileAndsendErrorToParent(LOCAL_FILENAME, err)
});