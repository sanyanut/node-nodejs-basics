import fs from "fs";
import {fileURLToPath} from "url";
import path from "path";

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = `${__dirname}\\files`;
  let arr = [];

  if (fs.existsSync(filePath)) {
    fs.readdir(`${filePath}`, (err, files) => {
      files.forEach((file) => {
        arr.push(file);
      });
      console.log(arr);
    })
  } else {
    throw new Error('FS operation failed');
  }
};

await list();