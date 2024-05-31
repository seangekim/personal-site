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
                    <li>Utilized Mongo, AWS, React, and Node to complete full-stack tickets for PBC and Test modules on <Link href="https://floqast.com/products/compliance-management/" target="_blank">Compliance Management</Link> platform to implement new features for user dashboard and backend optimization.</li>
                    <li>Conducted code reviews, unit tests, and documentation to ensure reliability and maintainability of codebase.</li>
                    <li>Participated in daily standups, planning, and all other Scrum activities. </li>
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