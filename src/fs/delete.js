import fs from "fs";
import {fileURLToPath} from "url";
import path from "path";

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = `${__dirname}\\files\\fileToRemove.txt`;

    if(!fs.existsSync(filePath)) {
      throw new Error('FS operation failed');
    } else {
      fs.unlinkSync(filePath);
    }
};

await remove();