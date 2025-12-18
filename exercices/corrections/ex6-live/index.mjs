import { access, constants } from "node:fs";
import { LOCAL_FILENAME, ROOT_PATH, REMOTE_URL } from "./utils/constants.mjs";
import { fork } from "node:child_process";
import { join } from 'node:path'
import { startTCPServer } from "./utils/functions.mjs";
/**
 * Si le fichier local existe, on lance le sevreur TCP
 * Si le fichier local n'existe pas, on lance le processus enfant
 *  pour télécharger le fichier puis on lance le serveur TCP qui lit ce fichier
 *  pour le servir aux clients
 */

access(LOCAL_FILENAME, constants.F_OK, (err) => {
  if (err) {
    // On lance notre processus enfant indépendant
    const child = fork(join(ROOT_PATH, "child-process", "countries.mjs"), [ REMOTE_URL ]);
    child.on("message", (data) => {
      if (data.error || data.success == false) {
        console.error("Le processus enfant a renvoyé une erreur", data);
        process.exit(1);
      } else if (data.success) {
        startTCPServer();
      }
    });
  } else {
    startTCPServer();
  }
});
