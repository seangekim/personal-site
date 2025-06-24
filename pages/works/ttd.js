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
                
                <ul>
                    <li>Architecting and implementing a data lakehouse-based Parquet export system to replace deprecated infrastructure, migrating Parquet Exporter notebooks to production Spark jobs w/ monitoring using Prometheus and Grafana.</li>
                    <li>Building scalable data pipelines using Apache Spark and Databricks to process Delta tables from S3, generating hourly parquet exports and orchestrating workflows through Airflow DAGs for reliable automation.</li>
                </ul>


                
                
                
                <List ml={4} my={4}>
                    <ListItem>  
                        <Meta>Role</Meta>
                        <span>Software Engineer Intern</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Team</Meta>
                        <span>Performance Automation: Real Time Bidding</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.thetradedesk.com/us" target="_blank">
                            thetradedesk.com <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Technologies</Meta>
                        <span>Scala, Apache Spark, Airflow, Iceberg, Databricks, AWS S3</span>
                    </ListItem>
                    
                    
                    
                    
                </List>
                {/* <WorkImage src="/images/floqast_logo.jpeg" alt="FloQast" /> */}
                
            </Container>
        </Layout>
    )
}
export default Work
export { getServerSideProps } from '../../components/chakra'