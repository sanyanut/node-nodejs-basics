import * as crypto from "crypto";
import fs from "fs";
import {fileURLToPath} from "url";
import path from "path";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const thePath = `${__dirname}\\files\\fileToCalculateHashFor.txt`;

  const file = fs.readFileSync(thePath, {encoding: "utf-8"});
  const hashResult = crypto.createHash('sha256')

  hashResult.update(file)

  const hex = hashResult.digest('hex');

  console.log(hex)
};

await calculateHash();