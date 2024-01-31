let config = {
	outputDir: "dist",
	assetsDir: "static",
	lintOnSave: false,
	runtimeCompiler: false,
	productionSourceMap: false,
	devServer: {
		host: "0.0.0.0",
		port: 8000,
		https: false,
		disableHostCheck: true
	},
};

module.exports = config;