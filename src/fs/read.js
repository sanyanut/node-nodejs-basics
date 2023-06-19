import fs from "fs";
import {fileURLToPath} from "url";
import path from "path";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = `${__dirname}\\files\\fileToRead.txt`;

  if(fs.existsSync(`${filePath}`)){
    console.log(fs.readFileSync(filePath, {encoding: "utf-8"}))
  } else {
    throw new Error('FS operation failed')
  }
};

await read();