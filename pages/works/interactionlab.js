import {Container, Badge, Link, List, ListItem, Text} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import{ Title, Meta, WorkImage} from '../../components/work'
import P from "../../components/paragraph"
import Layout
from '../../components/layouts/article'

const Work = () =>{
    return (
        <Layout title="interactionlab">
            <Container>
                <Title>
                    The Interaction Lab<Badge>2023</Badge>
                </Title>
                
                
                <ul>
                    <li>
                        The Interaction Lab focuses on developing computational principles, techniques, and models to enable socially assistive human-robot interaction that supports human health and wellness.
                    </li>
                    <li>
                        Designed web application functions utilizing Firebase and Vue.JS to manage and upkeep <Link href="https://uscinteractionlab.web.app/" target="_blank">lab website</Link>.
                    </li>
                    <li>
                        Under Prof. <Link href="https://maja-mataric.web.app/" target="_blank">Maja Mataric</Link>, researched and implemented multi-armed bandit strategies and user engagement tracking for re-engagement machine learning research using PyQt5, PyTorch and probability theory.
                    </li>
                    <li>
                        Conducted research on zero-shot visual recognition using OpenAI’s CLIP and APIs for paper submitted to <Link href="https://humanrobotinteraction.org/2024/" target="_blank">HRI 2024</Link>. 
                    </li>
                </ul>
                <List ml={4} my={4}>
                    <ListItem>  
                        <Meta>Role</Meta>
                        <span>Webmaster and Undergraduate Researcher</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://uscinteractionlab.web.app/" target="_blank">
                        uscinteractionlab <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python, Pytorch, Tensorflow, Vue.JS, Firebase</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Repos</Meta>
                        <Link href="https://github.com/interaction-lab/GPT4Vis" target="_blank">
                        GPT4Vis <ExternalLinkIcon mx="2px"/>
                        </Link>     
                
                        <Link href="https://github.com/interaction-lab/learning-how-to-reengage" target="_blank">
                        Learning How to Re-engage <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    
                    
                </List>
                
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src="/images/blossom.png" alt="blossom" width="150" height="200px" />
                    <img src="/images/lab1.png" alt="lab" style={{ height: '225px' }} />
                </div>
                <div style={{ width: '100%' }}>
                    <img src="/images/lab3.png" alt="code" style={{ width: '100%', height: 'auto' }} />
                </div>            
            </Container>
        </Layout>
    )
}
export default Work
export { getServerSideProps } from '../../components/chakra'