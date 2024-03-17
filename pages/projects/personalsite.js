import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import{ Title, ProjectImage, Meta, WorkImage} from '../../components/work'
import P from "../../components/paragraph"
import Layout
from '../../components/layouts/article'

const Work = () =>{
    return (
        <Layout title="personalsite">
            <Container>
                <Title>
                    personal website <Badge>2024</Badge>
                </Title>


                {/* <br></br> */}
                
                <ul>
                    <li>my website! an ongoing project with all my builds</li>
                    <li>built using NextJS, and Chakra UI</li>
                    <li>implemented framer motion for loading page animations</li>
                    <li>Animated dog and his shadow using ThreeJS</li>



                    
                </ul>
                
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="seankim.com">
                            seankim.com <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NextJS, Chakra UI, Framer Motion, ThreeJS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Repo</Meta>
                        <Link href="https://github.com/seangekim/personal-site">
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