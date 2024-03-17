import { Container, Box, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import{ ProjectGridItem} from "../components/grid-item"
import hibiscus from "../public/images/hacksc_thumb.png"
import interactionlab from "../public/images/interaction-lab.png"
import uniswap from "../public/images/uniswap_thumb.png"
import personalsite from "../public/images/personalsite.png"
import nba from "../public/images/nba.png"
import songhub from "../public/images/songhub.png"
import Layout from '../components/layouts/article'

const Projects = () => {
    return (
        <Layout>
        <Container>
            <Section delay = {0.7}>
                
                <Heading as="h3" fontSize={20} mb={4}>
                    projects
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap = {6}>
                    <Section delay = {1}>
                        <ProjectGridItem id="hibiscus" title="hibiscus" thumbnail={hibiscus}>
                            An all-in-one, plug-and-play hackathon platform
                        </ProjectGridItem>
                    </Section>
                    <Section delay = {1}>
                        <ProjectGridItem id="interactionlab" title="interaction lab" thumbnail={interactionlab}>
                            Learning How to Re-Engage
                        </ProjectGridItem> 
                    </Section>
                    <Section delay = {1}>
                        <ProjectGridItem id="uniswap" title="uniswap" thumbnail={uniswap}>
                            a hyper-localized digital marketplace for college students to sell and trade used goods on campus
                        </ProjectGridItem> 
                    </Section>
                    <Section delay = {1}>
                        <ProjectGridItem id="personalsite" title="personal site" thumbnail={personalsite}>
                            my own personal website
                        </ProjectGridItem> 
                    </Section>
                    <Section delay = {1}>
                        <ProjectGridItem id="nba" title="nba" thumbnail={nba}>
                            nba win rate projection
                        </ProjectGridItem> 
                    </Section>
                    <Section delay = {1}>
                        <ProjectGridItem id="songhub" title="songhub" thumbnail={songhub}>
                            songhub, send songs from spotify to apple music
                        </ProjectGridItem> 
                    </Section>


                </SimpleGrid>
            </Section>
        </Container>
        </Layout>
    )
}
export default Projects