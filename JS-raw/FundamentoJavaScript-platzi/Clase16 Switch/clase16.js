var signo = prompt('¿Cúal es tu signo?');

signo = signo.charAt(0).toUpperCase() + signo.substr(1);

switch (signo) {
    case 'acuario':
        console.log(`${signo} en peceras viviras`)
        break;
    case 'picis':
        console.log(`${signo} es un pecesito`)
        break;
    case 'geminis':
    case 'géminis':
        console.log(`${signo}: el otro yo te puede aparecer`)
        break;
    default:
        console.log(`el signo "${signo}", no existe`)
}