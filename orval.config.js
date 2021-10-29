if (!process.env.CI) {
	require('dotenv').config({
		path: `.env`,
	});
}

module.exports = {
	'resource-api': {
		input: {
			target: `${process.env.NEXT_PUBLIC_BACKEND_URL}/swagger/v1/swagger.json`,
		},
		output: {
			mode: 'tags-split',
			target: 'src/services',
			schemas: 'src/types/dtos',
			client: 'react-query',
			mock: true,
			override: {
				mutator: {
					path: 'src/services/config.ts',
					name: 'customInstance',
				},
			},
		},
	},
};
