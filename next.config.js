const withImages = require("next-images");
module.exports = withImages({
	reactStrictMode: true,
	images: {
		disableStaticImages: true,
	},
	webpack5: true,
	webpack: (config) => {
		return config;
	},
});
