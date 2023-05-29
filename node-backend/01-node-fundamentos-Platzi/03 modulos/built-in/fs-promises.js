// A partir de Node 10 podemos ocupar directamente la API de fs promises:
const fsPromises = require('fs').promises;
async function openAndClose() {
  let filehandle;
  try {
    filehandle = await fsPromises.open('./archivo.txt', 'r');
  } finally {
    if (filehandle !== undefined)
      await filehandle.close();
  }
}
openAndClose();

// https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_promises_api