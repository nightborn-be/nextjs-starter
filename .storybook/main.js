const path = require("path");

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
	stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials"],

	webpackFinal: async (config, { configType }) => {
		// SVG
		// Needed for SVG importing using svgr
		const indexOfRuleToRemove = config.module.rules.findIndex((rule) => rule.test?.toString().includes("svg"));

		config.module.rules.splice(indexOfRuleToRemove, 1, {
			test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
			loader: require.resolve("file-loader"),
			options: {
				name: "static/media/[name].[hash:8].[ext]",
				esModule: false,
			},
		});
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						svgo: false,
					},
				},
			],
		});

		return {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,
					"@emotion/core": toPath("node_modules/@emotion/react"),
					"@emotion/styled": toPath("node_modules/@emotion/styled"),
					"emotion-theming": toPath("node_modules/@emotion/react"),
				},
			},
		};
	},
};
