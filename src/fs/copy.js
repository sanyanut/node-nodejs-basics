import fs from 'fs';
import {fileURLToPath} from "url";
import path from "path";

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = `${__dirname}\\files`;
    const newFolder = `${__dirname}\\files_copy`;

    if(fs.existsSync(filePath) || !fs.existsSync(`${filePath}\\files_copy`)) {
        fs.mkdirSync(newFolder)
        fs.cpSync(filePath, newFolder, { recursive: true })
    } else {
        throw new Error('FS operation failed')
    }
};

await copy();
