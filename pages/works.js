import { Container, Box, Heading, SimpleGrid, Divider, Center} from '@chakra-ui/react'
import Section from '../components/section'
import{ WorkGridItem} from "../components/grid-item"
import hibiscus from "../public/images/hacksc_thumb.png"
import interactionlab from "../public/images/interaction-lab.png"
import uniswap from "../public/images/uniswap_thumb.png"
import personalsite from "../public/images/personalsite.png"
import nba from "../public/images/nba.png"
import songhub from "../public/images/songhub.png"
import Layout from '../components/layouts/article'
import novus from '../public/images/novus.jpeg'
import floqast from '../public/images/floqast.jpeg'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Section delay = {0.7}>
                
                <Heading as="h3" fontSize={20} mb={4}>
                    works
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap = {6}>
                    <Section delay = {1}>
                        <Center>
                            <WorkGridItem id="floqast" title="FloQast" thumbnail={floqast}>
                                Software Engineer Internship
                            </WorkGridItem>
                        </Center>
                    </Section>
                    <Section delay = {1}>
                        <Center>
                            <WorkGridItem id="hibiscus" title="HackSC" thumbnail={hibiscus}>
                                An all-in-one, plug-and-play hackathon platform
                            </WorkGridItem>
                        </Center>
                    </Section>
                    <Section delay = {1}>
                        <Center>
                            <WorkGridItem id="interactionlab" title="The Interaction Lab" thumbnail={interactionlab}>
                                Learning How to Re-Engage
                            </WorkGridItem> 
                        </Center>
                    </Section>
                    <Section delay = {1}>
                        <Center>
                            <WorkGridItem id="novus" title = "Novus Labs" thumbnail = {novus}>
                                Software Engineer Internship
                            </WorkGridItem>
                        </Center>
                    </Section>
                    <Section delay = {1}>
                        <Center>
                            <WorkGridItem id="personalsite" title="Personal Portfolio" thumbnail={personalsite}>
                                my own personal website
                            </WorkGridItem> 
                        </Center>
                    </Section>
                    <Section delay = {1}>
                        <Center>
                            <WorkGridItem id="uniswap" title="UniSwap" thumbnail={uniswap}>
                                a hyper-localized digital marketplace for college students to sell and trade used goods on campus
                            </WorkGridItem> 
                        </Center>
                    </Section>
                    
                    <Section delay = {1}>
                        <Center>
                            <WorkGridItem id="nba" title="NBA" thumbnail={nba}>
                                an NBA win rate projector.
                            </WorkGridItem> 
                        </Center>
                    </Section>
                    <Section delay = {1}>
                        <Center>
                            <WorkGridItem id="songhub" title="SongHub" thumbnail={songhub}>
                                send songs from spotify to apple music
                            </WorkGridItem> 
                        </Center>
                    </Section>


                </SimpleGrid>
            </Section>
        </Container>
        </Layout>
    )
}
export default Works