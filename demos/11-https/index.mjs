import { createServer as serverHTTPS } from "node:https";
import { createServer as serverHTTP } from "node:http";
import { readFile } from "node:fs/promises";
const readPrivateKeyPromise = readFile("ssl/private.pem");
const readCertificatePromise = readFile("ssl/certificate.crt");

/**
 * Si les certifs SSL existe => on lance l'app en HTTPS
 * Sinon on le lance en HTTP
 */
Promise.all([readPrivateKeyPromise, readCertificatePromise])
  .then((results) => {
    const key = results[0].toString();
    const cert = results[1].toString();
    serverHTTPS({ key, cert, agent: false, path: "/" }, (req, res) => {
      res.writeHead(200);
      res.end("Ok");
    }).listen(3443, () => {
      console.log("Running https://localhost:3443");
    });
  })
  .catch(() => {
    serverHTTP((req, res) => {
      res.writeHead(200);
      res.end("Ok");
    }).listen(8080, () => {
      console.log("Running http://localhost:8080");
    });
  });
