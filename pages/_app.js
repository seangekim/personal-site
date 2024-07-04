import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layouts/main"
import theme from '../libs/theme'
import Fonts from '../components/fonts'
import { AnimatePresence} from 'framer-motion'
import Head from 'next/head'
import { Analytics } from "@vercel/analytics/react"

const Website = ({Component, pageProps, router}) => {
    return(
        
        <ChakraProvider theme={theme}>
            <Head>
                <link rel="shortcut icon" href="/images/blob.png" type="image/png" />
                <title>Sean Kim's Portfolio</title>
            </Head>
            <Analytics />
            <Fonts />
            <Layout router={router}>
                <AnimatePresence initial={true}>
                <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website