import { Container, Box, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import{ WorkGridItem} from "../components/grid-item"
import hibiscus from "../public/images/hacksc_thumb.png"
import interactionlab from "../public/images/interaction-lab.png"
import uniswap from "../public/images/uniswap_thumb.png"
import personalsite from "../public/images/personalsite.png"
import nba from "../public/images/nba.png"
import songhub from "../public/images/songhub.png"
import Layout from '../components/layouts/article'

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
                        <WorkGridItem id="hibiscus" title="hibiscus" thumbnail={hibiscus}>
                            An all-in-one, plug-and-play hackathon platform
                        </WorkGridItem>
                    </Section>
                    <Section delay = {1}>
                        <WorkGridItem id="interactionlab" title="interaction lab" thumbnail={interactionlab}>
                            Learning How to Re-Engage
                        </WorkGridItem> 
                    </Section>
                    <Section delay = {1}>
                        <WorkGridItem id="personalsite" title="personal site" thumbnail={personalsite}>
                            my own personal website
                        </WorkGridItem> 
                    </Section>
                    <Section delay = {1}>
                        <WorkGridItem id="uniswap" title="uniswap" thumbnail={uniswap}>
                            a hyper-localized digital marketplace for college students to sell and trade used goods on campus
                        </WorkGridItem> 
                    </Section>
                    
                    <Section delay = {1}>
                        <WorkGridItem id="nba" title="nba" thumbnail={nba}>
                            nba win rate projection
                        </WorkGridItem> 
                    </Section>
                    <Section delay = {1}>
                        <WorkGridItem id="songhub" title="songhub" thumbnail={songhub}>
                            songhub, send songs from spotify to apple music
                        </WorkGridItem> 
                    </Section>


                </SimpleGrid>
            </Section>
        </Container>
        </Layout>
    )
}
export default Works