const { exec } = require("child_process");

const ip = "8.8.8.8";

const ping = (address) => {
  return new Promise((resolve, reject) => {
    exec(`ping ${address}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};

ping(ip)
  .then((result) => console.log(result))
  .catch((error) => console.error("Ocurrió un error: ", error.message));