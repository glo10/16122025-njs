import { get } from "node:https";
import { createWriteStream } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { deleteFileAndsendErrorToParent } from "../utils/functions.mjs";

/**
 * ici c'est le serveur qui va lancer le processus enfant en lui donnant l'URL
 *  => Le serveur va lancer le processus via node child_process/countries.mjs URL
 */
const url = process.argv[2];
const rootPath = dirname(fileURLToPath(import.meta.url));
const localFilename = join(rootPath, "data", "countries.json");
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
  const writeLocalFileStream = createWriteStream(localFilename);
  res.pipe(writeLocalFileStream);
  // gestion des erreurs de notre flux local d'écriture
  writeLocalFileStream.on("error", (err) => {
    console.error("Erreur writeStream", err);
    deleteFileAndsendErrorToParent(localFilename, err)
  });
  // Prévenir le processus parent quand l'écriture est terminé
  writeLocalFileStream.on("finish", () => {
    process.send({ success: true });
  });
}).on("error", (err) => {
    deleteFileAndsendErrorToParent(localFilename, err)
});