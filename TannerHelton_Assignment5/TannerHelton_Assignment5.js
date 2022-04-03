// Import createServer from http
const { createServer } = require("http");

// Create a black methods object
const methods = Object.create(null);

// Create the http server, parameters are request and response, and the callback is the fat arrow function below
createServer((request, response) => {
  // Create a handler to hold the methods
  let handler = methods[request.method] || notAllowed;
  // Handler is called with the request as parameter
  handler(request)
    // If there's an error, run this block
    .catch((error) => {
      // If it's status is null return the error (nothing)
      if (error.status != null) return error;
      // Else return the error as a string and status 500
      return { body: String(error), status: 500 };
    })
    // If no error, then send status of 200 with text
    .then(({ body, status = 200, type = "text/plain" }) => {
      // Set the response to contain status, content type and body
      response.writeHead(status, { "Content-Type": type });
      // If body exists, send it
      if (body && body.pipe) body.pipe(response);
      // Else end the response
      else response.end(body);
    });
}).listen(8000); // Opens the server on port 8000

// Asynchronous function for a method that isn't allowed (anything other than PUT, GET, DELETE, MKCOL)
async function notAllowed(request) {
  // Return status of 405 and the error text
  return {
    status: 405,
    body: `Method ${request.method} is not supported.`,
  };
}

// Import partse function from url
var { parse } = require("url");
// Import resolve and sep from path
var { resolve, sep } = require("path");

// set the baseDirectory to know where to look for files
var baseDirectory = process.cwd();

// urlPath takes url as parameter and returns the proper path
function urlPath(url) {
  // Get pathname from the parsed url
  let { pathname } = parse(url);
  // Set path to the right thing after some string manipulation
  let path = resolve(decodeURIComponent(pathname).slice(1));
  // If the path is not in the baseDirectory, return a forbidden error
  if (path != baseDirectory && !path.startsWith(baseDirectory + sep)) {
    throw { status: 403, body: "Forbidden" };
  }
  // Else return the path
  return path;
}

// Import createReadStream, stat, and readdir from fs (filesystem) to use for the file manipulation
const { createReadStream } = require("fs");
const { stat, readdir } = require("fs").promises;

// Import mime from mime package to handle the content types for the server
const mime = require("mime");

// Create an async function for the GET method
methods.GET = async function (request) {
  // Set path to the parsed request URL
  let path = urlPath(request.url);
  // Declare stats
  let stats;
  // Try to set stats to the stat(path)
  try {
    stats = await stat(path);
  } catch (error) {
    // If error, then throw the error
    if (error.code != "ENOENT") throw error;
    // else return file not found
    else return { status: 404, body: "File not found" };
  }
  // If there is a directory
  if (stats.isDirectory()) {
    return { body: (await readdir(path)).join("\n") };
  } else {
    return { body: createReadStream(path), type: mime.getType(path) };
  }
};

// Import rmdir and unlink from fs to handle deleting directories
const { rmdir, unlink } = require("fs").promises;

// Create an async function for the DELETE method
methods.DELETE = async function (request) {
  let path = urlPath(request.url);
  let stats;
  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    else return { status: 204 };
  }
  if (stats.isDirectory()) await rmdir(path);
  else await unlink(path);
  return { status: 204 };
};

const { createWriteStream } = require("fs");

function pipeStream(from, to) {
  return new Promise((resolve, reject) => {
    from.on("error", reject);
    to.on("error", reject);
    to.on("finish", resolve);
    from.pipe(to);
  });
}

// Create an async function for the PUT method
methods.PUT = async function (request) {
  let path = urlPath(request.url);
  await pipeStream(request, createWriteStream(path));
  return { status: 204 };
};

const { mkdir } = require("fs").promises;

// Create an async function for the MKCOL method
methods.MKCOL = async function (request) {
  let path = urlPath(request.url);
  let stats;
  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    await mkdir(path);
    return { status: 204 };
  }
  if (stats.isDirectory()) return { status: 204 };
  else return { status: 400, body: "Not a directory" };
};
