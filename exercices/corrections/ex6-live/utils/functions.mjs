import { unlink } from "node:fs";
export function deleteFileAndsendErrorToParent(localFilename, error) {
  unlink(localFilename, () => {
    process.send({ success: false, error: error.message });
  });
}
