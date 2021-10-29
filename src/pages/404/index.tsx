import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
    // Attributes
    const router = useRouter();

    //Render
    return (
        <>
            <Head>
                <title>{"You're lost"}</title>
            </Head>
        </>
    );
}
