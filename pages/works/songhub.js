import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import{ Title, Meta, WorkImage} from '../../components/work'
import P from "../../components/paragraph"
import Layout
from '../../components/layouts/article'

const Work = () =>{
    return (
        <Layout title="songhub">
            <Container>
                <Title>
                    SongHub<Badge>2023</Badge>
                </Title>
                
                <ul>
                    <li>Worked in a team of four to develop SongHub, a web app that allows users to connect Spotify or Apple Music accounts and share playlists and recent listening history with friends across platforms.</li>
                    <li>Utilized and implemented backend for Spotify’s Web API and Apple Music’s API.</li>
                    <li>Created web page design using Figma and integrated using React Native</li>
                </ul>
                
                <List ml={4} my={4}>
                    <ListItem>  
                        <Meta>Role</Meta>
                        <span>Developer / Designer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Video</Meta>
                        <Link href="https://www.youtube.com/watch?v=5W-Uh2yhH2w&t=2s" target="_blank">
                            youtube <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React Native, NodeJS, and MongoDB</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Repo</Meta>
                        <Link href="https://github.com/SutejSingh/musicShare" target="_blank">
                            SongHub <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    
                    
                    
                </List>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' , margin: '50px'}}>
                    
                    <div style={{ width: '45%' }}>
                        <img src="/images/songhub2.png" alt="Uniswap project" />
                    </div>
                    <div style={{ width: '45%' }}>
                        <img src="/images/songhub1.png" alt="Uniswap project" />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}
export default Work
export { getServerSideProps } from '../../components/chakra'