import { unlink, createReadStream} from "node:fs";
import { createServer } from "node:net";
import { LOCAL_FILENAME } from "./constants.mjs";
export function deleteFileAndsendErrorToParent(localFilename, error) {
  unlink(localFilename, () => {
    process.send({ success: false, error: error.message });
  });
}

export function startTCPServer() {
  createServer((socket) => {
    // lecture par paquet du contenu du fichier en local
    const readLocalStream = createReadStream(LOCAL_FILENAME)
    // envoyer les données par paquet au client
    readLocalStream.pipe(socket)
    socket.on("error", (err) => {
      // configuration malsaine
      console.error("Error client from server", err);
      if(err.code === 'ECONNRESET') {
        console.log('CTRCL+C de la part du client')
      }
      socket.destroy();
    });
    socket.on("close", (stream) => {
      console.log('stream', stream)
      // sain
      console.log("Fin de la communication saine");
    });
  }).listen(8006, () => {
    console.info('Running localhost:8006')
  })
}