const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request made");

  //   set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});

// Status Codes

// 200 - OK
// 301 - Resource moved
// 404 - Not found
// 500 - Internal server error

// 100 Range - Informational response - request received, continuing process
// 200 Range - Success - The action was successfully received, understood, and accepted
// 300 Range - Redirection - Further action must be taken in order to complete the request
// 400 Range - Client Error - The request contains bad syntax or cannot be fulfilled
// 500 Range - Server Error - The server failed to fulfill an apparently valid request
