define(function(require,exports,module) {
	function nihao() {
		alert('nihao')
	}
	function buhao() {
		alert('buhao')
	}
	module.exports.nihao = nihao;
	exports.buhao = buhao;
})