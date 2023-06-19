import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";
import {Transform} from 'stream';

const transform = async () => {

  const reversedItemStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversedItem = chunk.toString().split('').reverse().join('');
      callback(null, reversedItem);
    }
  });
  process.stdin.pipe(reversedItemStream).pipe(process.stdout);
};

await transform();