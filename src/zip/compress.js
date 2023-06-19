import fs from "fs";
import zlib from "zlib";
import {fileURLToPath} from "url";
import path from "path";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const inPath = `${__dirname}\\files\\fileToCompress.txt`;
  const outPath = `${__dirname}\\files\\archive.gz`;

  const gzip = zlib.createGzip();
  const inputFile = fs.createReadStream(inPath);
  const outputFile = fs.createWriteStream(outPath);

  inputFile.pipe(gzip).pipe(outputFile);

};

await compress();