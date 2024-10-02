import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import{ Title, Meta, WorkImage} from '../../components/work'
import P from "../../components/paragraph"
import Layout
from '../../components/layouts/article'

const Work = () =>{
    return (
        <Layout title="The Trade Desk">
            <Container>
                <Title>
                    The Trade Desk <Badge>2025</Badge>
                </Title>
                
                
                
                
                
                <List ml={4} my={4}>
                    <ListItem>  
                        <Meta>Role</Meta>
                        <span>Incoming Software Engineer Intern</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.thetradedesk.com/us" target="_blank">
                            thetradedesk.com <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    
                    
                    
                    
                </List>
                {/* <WorkImage src="/images/floqast_logo.jpeg" alt="FloQast" /> */}
                
            </Container>
        </Layout>
    )
}
export default Work
export { getServerSideProps } from '../../components/chakra'