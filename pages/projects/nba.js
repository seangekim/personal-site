import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import{ Title, ProjectImage, Meta, WorkImage} from '../../components/work'
import P from "../../components/paragraph"
import Layout
from '../../components/layouts/article'

const Work = () =>{
    return (
        <Layout title="nba win rate projector">
            <Container>
                <Title>
                    nba win rate projector <Badge>2023</Badge>
                </Title>
                
                <ul>
                    <li>Designed web app to create data visualizations of win rates for NBA teams’ past seasons.</li>

                    <li>Integrated linear regression to create future projections.</li>
                    <li>Handled data processing with Lambda and pandas. Matplotlib and Scikit-learn used to visualize data and create future projections.</li>
                </ul>
                
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/seangekim/NBA_ML_Projections">
                            nba win rate projector <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python, Flask, Matplotlib, Scikit-learn, Pandas</span>
                    </ListItem>
                   
                    
                    
                </List>
                <WorkImage src="/images/nba2.png" alt="nba" />
                <WorkImage src="/images/nba1.jpg" alt="nba" />
                
            </Container>
        </Layout>
    )
}
export default Work
export { getServerSideProps } from '../../components/chakra'