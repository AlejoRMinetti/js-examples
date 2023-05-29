// Sharp
const sharp = require("sharp");

// La siguiente reducira una imagen de cualquier tamaño a 80x80 
// y lo guardara en una imagen mas pequeña sin eliminr la original.
sharp("png-transparent-groot.png")
    .resize(18, 18)
    .toFile("groot_18x18.png");

sharp('png-transparent-groot.png')
    .resize(80)
    .grayscale()
    .toFile('groot-BnW.png');