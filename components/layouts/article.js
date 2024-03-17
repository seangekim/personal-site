import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'
import Section from '../section'

const variants = {
    hidden: { opacity : 0, x: 0, y: 20},
    enter: { opacity : 1, x: 0, y: 0},
    exit: { opacity : 0, x: 0, y: 20}
}

const Layout = ({ children ,title}) => (
    
    <Section delay = {0.7}>
        <motion.article
    initial = "hidden" 
    animate = "enter" 
    exit = "exit" 
    variants = {variants} 
    transition = {{duration: 0.4, type: 'easeInOut'}} 
    style = {{position: "relative"}}>
        <>
        {title && ( <Head>
            <title>{title} - Sean Kim</title>
            </Head>
            )}
            {children}
        <GridItemStyle />
        </>
    </motion.article>
    </Section>
)

export default Layout