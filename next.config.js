const withImages = require("next-images");
module.exports = withImages({
	reactStrictMode: true,
	images: {
		disableStaticImages: true,
	},
	webpack: (config) => {
		return config;
	},
});
