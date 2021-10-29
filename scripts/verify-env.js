if (!process.env.CI) {
	require('dotenv').config({
		path: `.env`,
	});
}

// Starting log
console.log(`*******

Starting .env verification...`);

// Initial setup of the global environment
const env = {
	NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
	NEXT_PUBLIC_DEFAULT_LANGUAGE: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
	NEXT_PUBLIC_AVAILABLE_LANGUAGES:
		process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES,
	LOCALIZE_TOKEN: process.env.LOCALIZE_TOKEN,
	LOCALIZE_OUTPUT_DIR: process.env.LOCALIZE_OUTPUT_DIR,
	LOCALIZE_PROJECT_ID: process.env.LOCALIZE_PROJECT_ID,
	LOCALIZE_ORGANISATION_ID: process.env.LOCALIZE_ORGANISATION_ID,
};

// Verification of correct setup
let errorMessage = Object.keys(env)
	.map((key) => {
		if (!env[key]) {
			return `Missing following property in your .env : ${key}.`;
		}
	})
	.join('');

if (!errorMessage) {
	console.log(`You're all set and ready to go.`);

	console.log(`
*******`);
} else {
	console.log(errorMessage);

	console.log(`
*******`);
	throw 'Please verify your .env file.';
}
