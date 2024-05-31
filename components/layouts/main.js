import Head from 'next/head'
import Navbar from '../navbar.js'
import dynamic from 'next/dynamic'
import Footer from '../footer'
import ForestLoader from '../forest-loader.js'


import {Box, Container} from '@chakra-ui/react'

const LazyForest = dynamic(() => import('../forest'), {
    ssr: false,
    loading: () => <ForestLoader />
  })

const Main = ({ children, router}) =>{
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Sean Kim - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                
                <LazyForest />
                
                {children}


                
                <Footer />


            </Container>



        </Box>
    )
}

export default Main