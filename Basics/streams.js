const fs = require("fs");

const readStream = fs.createReadStream("./documents/streamtext.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("./documents/streamtextcopy.txt");

readStream.on("data", (chunk) => {
  console.log("----- NEW CHUNK -----");
  console.log(chunk);
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});

// piping
readStream.pipe(writeStream);
