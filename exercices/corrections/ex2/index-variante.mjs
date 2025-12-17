import { writeFile, readFile } from "node:fs/promises";
import { CONTENT } from "./data.mjs";
const filename = "index.html";
await writeFile(filename, CONTENT, { encoding: "utf-8" }).then(() => {
  console.info(`Ecriture du fichier ${filename} OK`);
}).catch(err => console.error('error writeFile', err));

readFile(filename, { encoding: "utf-8" }).then((data) =>
  console.log("Contenu lu", data)
).catch(err => console.error('error readFile', err));;
