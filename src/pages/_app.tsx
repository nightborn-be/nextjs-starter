import React from "react";
import "tailwindcss/tailwind.css";
import { AnimateSharedLayout } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {

  const queryClientRef = React.useRef()
   if (!queryClientRef.current) {
     // @ts-ignore
     queryClientRef.current = new QueryClient({defaultOptions: {queries: {refetchIntervalInBackground: true, refetchOnReconnect: false, refetchOnMount: true, refetchOnWindowFocus: false}}})
   }
   
  return (
    <AnimateSharedLayout>
      <QueryClientProvider client={queryClientRef.current}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AnimateSharedLayout>
  );
}

export default MyApp;