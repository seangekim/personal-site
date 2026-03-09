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
                    The Trade Desk
                </Title>
        
                <ul>
                    <li>Built enterprise-scale data processing system using Apache Spark on EMR clusters to manage 22M+ row Iceberg tables with 300K+ daily operations, implementing custom schema alignment and deduplication logic.</li>
                    <li>Developed production Spark applications in Scala with comprehensive ScalaTest/Mockito test suites, IAM-secured MySQL integration, and Airflow orchestration, reducing data pipeline runtime from hours to 15-minute cycles.</li> 
                    <li>Architected data lakehouse migration from deprecated infrastructure to Apache Iceberg format with Prometheus and Grafana monitoring, enabling hourly parquet exports, eliminating 4-hour delays for downstream systems.</li>
                </ul>


                
                
                
                <List ml={4} my={4}>
                    <ListItem>  
                        <Meta>Role</Meta>
                        <span>Software Engineer</span>
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
                        <span>Scala, Apache Spark, Airflow, Iceberg, Databricks, AWS S3, Prometheus, Grafana.</span>
                    </ListItem>
                    
                    
                    
                    
                </List>
                {/* <WorkImage src="/images/floqast_logo.jpeg" alt="FloQast" /> */}
                
            </Container>
        </Layout>
    )
}
export default Work
export { getServerSideProps } from '../../components/chakra'