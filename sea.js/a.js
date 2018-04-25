define(function(require,exports,module) {
	function nihao() {
		alert('nihao')
	}
	function buhao() {
		alert('buhao')
	}
	module.exports.nihao = nihao;
	exports.buhao = buhao;

		/*require("test1")
		require("test2")  //test1js test2js*/

		/*require.async("test1");
		require("test2") // test2js  test1js*/
})