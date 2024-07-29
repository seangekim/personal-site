import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import{ Title, Meta, WorkImage} from '../../components/work'
import P from "../../components/paragraph"
import Layout
from '../../components/layouts/article'

const Work = () =>{
    return (
        <Layout title="FloQast">
            <Container>
                <Title>
                    FloQast <Badge>2024</Badge>
                </Title>
                
                
                <ul>
                    <li>Utilized Mongo, AWS, React Redux, and Node to complete full-stack tickets for modules on <Link href="https://floqast.com/products/compliance-management/" target="_blank">Compliance Management</Link>  platform,   implementing new features for user dashboard and backend optimization, using Git for VCS.</li>
                    <li>Addressed customer-requested issues regarding status filtering by adding backend logic, frontend functionality, and Jest unit testing, impacting over $12 million in ARR across 53 customers.</li>
                    <li>Designed and implemented new schemas along with CRUD endpoints with proper aggregation, sanitization, and query optimization. </li>
                </ul>
                
                
                <List ml={4} my={4}>
                    <ListItem>  
                        <Meta>Role</Meta>
                        <span>Software Engineer Intern</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://floqast.com/" target="_blank">
                            floqast.com <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Technologies</Meta>
                        <span>JavaScript, React, MongoDB, AWS</span>
                    </ListItem>
                    
                    
                    
                </List>
                {/* <WorkImage src="/images/floqast_logo.jpeg" alt="FloQast" /> */}
                
            </Container>
        </Layout>
    )
}
export default Work
export { getServerSideProps } from '../../components/chakra'