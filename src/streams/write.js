import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = `${__dirname}\\files\\fileToWrite.txt`;

  async function setupStream() {
    return fs.createWriteStream(filePath)
  }
  async function initWriteWithStream() {
    process.stdin.pipe(await setupStream())
    process.stdin.resume();
  }
  await initWriteWithStream();
};

await write();