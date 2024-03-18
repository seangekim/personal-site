import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import{ Title, Meta, WorkImage} from '../../components/work'
import P from "../../components/paragraph"
import Layout
from '../../components/layouts/article'

const Work = () =>{
    return (
        <Layout title=" Novus">
            <Container>
                <Title>
                    Novus Labs <Badge>2023</Badge>
                </Title>
                
                <ul>
                    <li>Assisted in the development of a web application to display interactive data visualizations for a marketing contractor based on consumer data and enabled filtering options.</li>

                    <li>Developed an interactive Front-end UI portal using React that retrieved and displayed data.</li>
                    <li>Implemented unit and integration tests using pytest to ensure web app functionality.</li>
                </ul>
                
                <List ml={4} my={4}>
                    <ListItem>  
                        <Meta>Role</Meta>
                        <span>Software Engineering Intern</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.novuslabs.com/" target="_blank">
                            novuslabs.com <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Technologies</Meta>
                        <span>Python, MongoDB, ReactJS, AWS, Docker</span>
                    </ListItem> 
                    
                </List>
                <WorkImage src="/images/novus1.png" alt="Novus" />
                
            </Container>
        </Layout>
    )
}
export default Work
export { getServerSideProps } from '../../components/chakra'