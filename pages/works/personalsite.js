import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import{ Title, Meta, WorkImage} from '../../components/work'
import P from "../../components/paragraph"
import Layout
from '../../components/layouts/article'

const Work = () =>{
    return (
        <Layout title="personalsite">
            <Container>
                <Title>
                    Personal Website<Badge>2024</Badge>
                </Title>


                {/* <br></br> */}
                
                <ul>
                    <li>My website! An ongoing project with all my builds.</li>
                    <li>Built using NextJS, and Chakra UI.</li>
                    <li>Implemented framer motion for loading page animations.</li>
                    <li>Animated dog using <Link href="https://threejs.org/" target="_blank" isExternal>ThreeJS</Link> (designed w/ Blender and <Link href="https://ephtracy.github.io/" target="_blank" isExternal>MagicaVoxel</Link>).</li>

                </ul>
                
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://sean-kim.vercel.app" target="_blank">
                            sean-kim.vercel.app <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NextJS, Chakra UI, Framer Motion, ThreeJS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Repo</Meta>
                        <Link href="https://github.com/seangekim/personal-site" target="_blank">
                            site <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    
                    
                </List>
                <WorkImage src="/images/personalsitecode.png" alt="personal site" />
                
            </Container>
        </Layout>
    )
}
export default Work
export { getServerSideProps } from '../../components/chakra'