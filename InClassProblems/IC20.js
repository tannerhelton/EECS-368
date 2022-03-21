// const { writeFile } = require("fs");
// writeFile("graffiti.txt", "I promise the Node was here", (err) => {
//   if (err) console.log(`Failed to write file: ${err}`);
//   else console.log("File written.");
// });
// const { readFile } = require("fs").promises;
// readFile("graffiti.txt", "utf8").then((text) =>
//   console.log("The file contains:", text)
// );

const { request } = require("http");
let requestStream = request(
  {
    hostname: "eloquentjavascript.net",
    path: "/20_node.html",
    method: "GET",
    headers: { Accept: "text/html" },
  },
  (response) => {
    console.log("Server responded with status code", response.statusCode);
  }
);
requestStream.end();
