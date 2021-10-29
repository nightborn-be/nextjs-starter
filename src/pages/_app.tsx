import { useRef } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AnimateSharedLayout } from 'framer-motion';
import { QueryClient, QueryClientProvider } from 'react-query';

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

    return (
        <AnimateSharedLayout>
            <QueryClientProvider client={queryClientRef.current}>
                <ChakraProvider>
                    <Component {...pageProps} />
                </ChakraProvider>
            </QueryClientProvider>
        </AnimateSharedLayout>
    );
}

export default MyApp;
