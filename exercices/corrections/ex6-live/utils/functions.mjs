import { unlink } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
export const ROOT_PATH = dirname(fileURLToPath(import.meta.url));
export const LOCAL_FILENAME = join(ROOT_PATH, "data", "countries.json");
export function deleteFileAndsendErrorToParent(localFilename, error) {
  unlink(localFilename, () => {
    process.send({ success: false, error: error.message });
  });
}
