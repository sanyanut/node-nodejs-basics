import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = `${__dirname}\\files\\fileToRead.txt`;

    async function readChunks(item) {
      for await (const chunk of item) {
        process.stdout.write(chunk);
      }
    }

    const read = fs.createReadStream(filePath);
    await readChunks(read)
};

await read();