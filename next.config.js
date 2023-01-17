/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	distDir: 'build',
};
const withImages = require("next-images");
(module.exports = nextConfig),
	withImages({
		webpack(config, options) {
			config.module.rules.push({
				test: /\.svg$/,
				use: ["@svgr/webpack"],
			});
			return config;
		},
	});

// module.exports = nextConfig
