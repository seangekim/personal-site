import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layouts/main"
import theme from '../libs/theme'
import Fonts from '../components/fonts'
import { AnimatePresence} from 'framer-motion'
import Head from 'next/head'

const Website = ({Component, pageProps, router}) => {
    return(
        
        <ChakraProvider theme={theme}>
            <Head>
                <link rel="shortcut icon" href="/images/logo.png" type="image/png" />
                <title>Sean Kim's Portfolio</title>
            </Head>
            
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