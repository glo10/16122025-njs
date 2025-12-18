import { constants } from "node:fs";
import { access } from "node:fs/promises";
import { LOCAL_FILENAME, ROOT_PATH, REMOTE_URL } from "./utils/constants.mjs";
import { fork } from "node:child_process";
import { join } from 'node:path'
import { startTCPServer } from "./utils/functions.mjs";

access(LOCAL_FILENAME, constants.F_OK)
.then(() => startTCPServer())
.catch(() => {
   const child = fork(join(ROOT_PATH, "child-process", "countries.mjs"), [ REMOTE_URL ]);
    child.on("message", (data) => {
      if (data.error || data.success == false) {
        console.error("Le processus enfant a renvoyé une erreur", data);
        process.exit(1);
      } else if (data.success) {
        startTCPServer();
      }
    });
});
