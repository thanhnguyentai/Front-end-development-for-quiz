(function (root, factory) {
	'use strict';
	var requireJsShim = {
		cache: null,
		config: function (config) {
			if (config)
				this.cache = config;
			return this.cache;
		}
	};
	if (typeof define === 'function' && define.amd && typeof requirejs !== 'undefined') {
		factory(requirejs);
	} else if (typeof exports === 'object') {
		var config = factory(requireJsShim).config();
		module.exports = config;
	}
}(this, function (requirejs) {
	'use strict';
	requirejs.config({
		baseUrl: '/../js/',
		paths: {
			base: 'src'
		}
	});
	return requirejs;
}));
