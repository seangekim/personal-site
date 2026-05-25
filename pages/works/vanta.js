import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import{ Title, Meta} from '../../components/work'
import P from "../../components/paragraph"
import Layout
from '../../components/layouts/article'

const Work = () =>{
    return (
        <Layout title="Vanta">
            <Container>
                <Title>
                    Vanta <Badge>2026-Present</Badge>
                </Title>
        
                <ul>
                    <li>Engineer on the Scope & Segmentation team. </li>
                </ul>


                
                
                
                <List ml={4} my={4}>
                    <ListItem>  
                        <Meta>Role</Meta>
                        <span>Software Engineer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Team</Meta>
                        <span>Scope & Segmentation</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.vanta.com/" target="_blank">
                            vanta.com <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Technologies</Meta>
                        <span>Scala, Apache Spark, Airflow, Iceberg, Databricks, AWS S3, Prometheus, Grafana.</span>
                    </ListItem> */}
                    
                    
                    
                    
                </List>
                {/* <WorkImage src="/images/floqast_logo.jpeg" alt="FloQast" /> */}
                
            </Container>
        </Layout>
    )
}
export default Work
export { getServerSideProps } from '../../components/chakra'