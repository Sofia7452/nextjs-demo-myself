import Head from 'next/head'
import 'styles/global.css'
export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>我的博客-sofia</title>
            </Head>
            <Component {...pageProps} />
        </>
        )
  }
