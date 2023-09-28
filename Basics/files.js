const fs = require("fs");

// Reading Files
fs.readFile("./documents/text1.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});

// Writing Files

fs.writeFile(
  "./documents/text2.txt",
  "Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may",
  () => {
    console.log("File was written.");
  }
);

// Directories

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Folder created.");
  });
} else {
  fs.rmdir("./assets", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Folder deleted.");
  });
}

// Deleting Files

if (fs.existsSync("./documents/tobedeleted.txt")) {
  fs.unlink("./documents/tobedeleted.txt", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("File deleted.");
  });
}
