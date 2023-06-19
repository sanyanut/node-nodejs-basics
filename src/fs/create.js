import { existsSync, writeFileSync } from 'fs';
import {fileURLToPath} from "url";
import path from "path";

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = `${__dirname}\\files\\fresh.txt`;
    const data = 'I am fresh and young'

    if(existsSync(filePath)) {
        throw new Error('FS operation failed')
    } else {
        writeFileSync(filePath, data)
    }
};

await create();