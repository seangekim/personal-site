import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import{ Title, Meta, WorkImage} from '../../components/work'
import P from "../../components/paragraph"
import Layout
from '../../components/layouts/article'

const Work = () =>{
    return (
        <Layout title="Hibiscus">
            <Container>
                <Title>
                    hibiscus <Badge>2023</Badge>
                </Title>
                
                <ul>
                    <li>Hibiscus, an all-in-one, plug-and-play hackathon platform for HackSC developed with a team of six developers and four designers.</li>

                    <li>Orchestrated system design for different services for the Hackathon platform.</li>
                    <li>Developed API endpoints for application, events, and participant services.</li>
                </ul>
                
                <List ml={4} my={4}>
                    <ListItem>  
                        <Meta>Role</Meta>
                        <span>Software Developer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.hacksc.com/">
                            hacksc.com <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NextJS, ReactJS, NodeJS, ExpressJS, Supabase, AWS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Repo</Meta>
                        <Link href="https://github.com/HackSC/hibiscus">
                            hibiscus <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    
                    
                </List>
                <WorkImage src="/images/hacksc1.png" alt="HackSC" />
                <WorkImage src="/images/hacksc2.png" alt="HackSC" />
            </Container>
        </Layout>
    )
}
export default Work
export { getServerSideProps } from '../../components/chakra'