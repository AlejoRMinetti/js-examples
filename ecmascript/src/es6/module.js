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

//es6 (no me anda :( )
function hello() {
	return 'Hello!'
}
export default hello