/* //previo es6 se exportaba:
const hello = () => {
  console.log("hello!");
};
const bye = () => {
  console.log("bye!");
};

module.exports = {
  hello,
  bye,
};
*/

//es6 (no me anda :( )

function hello() {
	return console.log('Hello!');
}
export default hello

// named export: no permite cambiarle el nombre en la importacion
// export {hello}

