// Declaring/instantiating the function
methods.UNKNOWN = async function (request) {
  // Turning the url into a useable path
  let path = urlPath(request.url);
  // Declaring the stats variable
  let stats;
  try {
    // try to run stat with path as a parameter (since stat is asynchronous we need to wait for it)
    stats = await stat(path);
  } catch (error) {
    // If there's an error run this block
    if (error.code != "ENOENT") throw error;
    // If the error code is ENOENT throw an error (something was obscure)
    else return { status: 204 }; // If no error, return status 204 (success but no content in response)
  }
  if (stats.isDirectory()) await rmdir(path);
  // Now, check to see if stats has directory, if so, remove it
  else await unlink(path); // if stats isn't a directory, then remove the path
  return { status: 204 }; // return status 204 (success but no content in response)
};
