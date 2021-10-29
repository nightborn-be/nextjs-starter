import { useRef } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AnimateSharedLayout } from 'framer-motion';
import { QueryClient, QueryClientProvider } from 'react-query';
import { I18nextProvider } from 'react-i18next';
import { getI18nInstance } from '../i18n';

function MyApp({ Component, pageProps }) {
	const queryClientRef = useRef();
	if (!queryClientRef.current) {
		// @ts-ignore
		queryClientRef.current = new QueryClient({
			defaultOptions: {
				queries: {
					refetchIntervalInBackground: true,
					refetchOnReconnect: false,
					refetchOnMount: true,
					refetchOnWindowFocus: false,
				},
			},
		});
	}

	// if (process.env.NODE_ENV === 'development') {
	//     require('../services/mocks');
	// }

	return (
		<I18nextProvider i18n={getI18nInstance()}>
			<AnimateSharedLayout>
				<QueryClientProvider client={queryClientRef.current}>
					<ChakraProvider>
						<Component {...pageProps} />
					</ChakraProvider>
				</QueryClientProvider>
			</AnimateSharedLayout>
		</I18nextProvider>
	);
}

export default MyApp;
