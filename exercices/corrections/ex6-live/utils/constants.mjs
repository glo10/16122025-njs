import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT_PATH = join(dirname(fileURLToPath(import.meta.url)), "..");
export const LOCAL_FILENAME = join(ROOT_PATH, "data", "countries.json");
export const REMOTE_URL = "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/refs/heads/master/json/countries%2Bstates%2Bcities.json"