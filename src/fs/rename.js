import fs from 'fs';
import {fileURLToPath} from "url";
import path from "path";

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = `${__dirname}\\files`;

    const oldFile = 'wrongFilename.txt';
    const newFile = 'properFilename.md';

    if(!fs.existsSync(`${filePath}\\${oldFile}`) || fs.existsSync(`${filePath}\\${newFile}`)) {
        throw new Error('FS operation failed');
    } else {
        fs.renameSync(`${filePath}\\${oldFile}`, `${filePath}\\${newFile}`)
    }
};

await rename();