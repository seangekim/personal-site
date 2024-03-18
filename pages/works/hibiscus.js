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
                    HackSC <Badge>2023</Badge>
                </Title>
                
                <ul>
                    <li>At HackSC, we curate transformative hackathons and conferences that empower participants to push the boundaries of their potential. </li>
                    <li>Developed Hibiscus, an all-in-one, plug-and-play hackathon platform for HackSC developed with a team of six developers and four designers.</li>

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
                        <Link href="https://www.hacksc.com/" target="_blank">
                            hacksc.com <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NextJS, ReactJS, NodeJS, ExpressJS, Supabase, AWS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Repo</Meta>
                        <Link href="https://github.com/HackSC/hibiscus" target="_blank">
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