// FS
import { readFile } from "fs";

// Path
import path from "path";

/**
 * Read a json file and parse it
 * @param {string} fileName
 * @param {Function} callback
 */

((fileName, callback) => {
  // File path
  const filePath = path.join(process.cwd(), `data/${fileName}`);

  // Read
  readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      callback(err);
    }

    callback(undefined, JSON.parse(data));
  });
})("data.json", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

process.on("uncaughtException", (err) => {
  console.log("Error caught");
  console.log(`Message - ${err.message}`);
  console.log(`Error - ${err.stack}`);
  process.exit(1);
});
