import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import{ Title, ProjectImage, Meta, WorkImage} from '../../components/work'
import P from "../../components/paragraph"
import Layout
from '../../components/layouts/article'

const Work = () =>{
    return (
        <Layout title="Hibiscus">
            <Container>
                <Title>
                    uniswap <Badge>2023</Badge>
                </Title>
            
                <ul>
                    <li>UniSwap, a hyper-localized digital marketplace for college students that aims to provide a sustainable solution for buying and selling used goods. Our platform was designed by four developers to help reduce waste and environmental harm caused by shipping, packaging, and transporting goods.</li>
                    <li>Top 10 finalist among 70+ teams at Caltech’s Hacktech 2023.</li>
                    <li>Integrated Google APIs for secure sign in and deep links to Venmo payment system using Python.</li>
                </ul>
                
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Video</Meta>
                        <Link href="https://www.youtube.com/watch?v=rIulgB2h5wE">
                            youtube <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python, Flask, MongoDB, HTML, CSS, and JavaScript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Repo</Meta>
                        <Link href="https://github.com/seangekim/UniSwap_">
                            uniswap <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    
                    
                </List>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', }}>
                    <div style={{ width: '45%' }}>
                        <img src="/images/uniswap1.png" alt="Uniswap project" />
                    </div>
                    <div style={{ width: '45%' }}>
                        <img src="/images/uniswap2.png" alt="Uniswap project" />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}
export default Work
export { getServerSideProps } from '../../components/chakra'