import {fileURLToPath} from "url";
import path from "path";
import zlib from "zlib";
import fs from "fs";

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const inPath = `${__dirname}\\files\\archive.gz`;
  const outPath = `${__dirname}\\files\\fileToCompress.txt`;

  const unZip = zlib.createUnzip();
  const inputFile = fs.createReadStream(inPath);
  const outputFile = fs.createWriteStream(outPath);

  inputFile.pipe(unZip).pipe(outputFile);
};

await decompress();