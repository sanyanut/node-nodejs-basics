import {Worker, isMainThread} from "node:worker_threads";
import {fileURLToPath} from "url";
import path from "path";
import * as os from "os";

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = `${__dirname}\\worker.js`;
  const cpuLogicalCores = os.cpus().length;

  let num = 10;
  const workerThreads = []


  for (let i = 0; i < cpuLogicalCores; i++) {
    const worker = new Worker(
      filePath,
      {
        workerData: {
          num: num + i
        }
      })
    worker.on("message", result => {
      console.log(`${i}th Fibonacci Number: ${result}`);
      workerThreads.push({
        status: 'resolved',
        data: result
      })
    });
    worker.on("error", error => {
      console.log(error);
      workerThreads.push({
        status: 'error',
        data: null
      })
    });
    worker.on("exit", exitCode => {
      console.log(workerThreads)
    })
  }


};

await performCalculations();