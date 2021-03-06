import React from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimateSharedLayout } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
	const queryClientRef = React.useRef();
	if (!queryClientRef.current) {
		// @ts-ignore
		queryClientRef.current = new QueryClient({ defaultOptions: { queries: { refetchIntervalInBackground: true, refetchOnReconnect: false, refetchOnMount: true, refetchOnWindowFocus: false } } });
	}

	return (
		<AnimateSharedLayout>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
			</Head>
			<QueryClientProvider client={queryClientRef.current}>
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
			</QueryClientProvider>
		</AnimateSharedLayout>
	);
}

export default MyApp;
