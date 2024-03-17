import {Link, List, ListItem, Button, Container , Box, Heading, Image, useColorModeValue} from "@chakra-ui/react"
import Section from'../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoSend } from 'react-icons/io5'

const Page = () => {

    const bgColor = useColorModeValue('#be864e', '#5a189a');
    const iconColor = useColorModeValue('black', 'white');

    return(
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center" marginTop={5} marginBottom={5}>
                Hi! I&apos;m Sean, meet the dog
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Sean 진기 Kim
                    </Heading>
                    <p>Digital Craftsman (Developer / Designer)</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml = {{md: 6}} algin="center">
                    <Image 
                    borderColor="whiteAlpha.800" 
                    borderWidth={2} 
                    borderStyle="solid" 
                    maxWidth="100px" 
                    display="inline-block" 
                    borderRadius="full" 
                    src="/images/prof_pic.png" 
                    alt="Profile img"/>
                </Box>
            </Box>

            <Section delay={.5}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>Hey! I'm Sean, a developer based in Los Angeles with a passion for building digital services/stuff. I have a knack for all things launching products, from planning and designing, to solving real-life problems with code. When not on my laptop, you'll probably find me cooking, camping, or snowboarding. 
            </Paragraph>
            <br></br>
            <Paragraph>
            Currently, I'm pursuing my M.S. in Computer Science along with my B.S. in Computer Science and Business Administration w/ a minor in Philosophy at the University of Southern California.
            </Paragraph>

            <Box align="center" my={4}>
                <NextLink href="/projects">
                    <Button rightIcon={<ChevronRightIcon />} 
                        bg={bgColor}
                        color={iconColor}
                        >


                        My portfolio
                        </Button>
                </NextLink>
            </Box>   
            </Section>
        <Section delay={.5}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>May 2023 - Present</BioYear>
                Incoming Software Engineering Intern at FloQast
            </BioSection>
            
            <BioSection>
                <BioYear>Dec 2022 - Present</BioYear>
                Webmaster and Undergrad Researcher at USC's Robotics Interaction Lab
            </BioSection>

            <BioSection>
                <BioYear>Mar 2023 - Present</BioYear>
                Software Developer at HackSC
            </BioSection>

            <BioSection>
                <BioYear>May 2023 - August 2023</BioYear>
                Software Engineering Intern at Novus Labs
            </BioSection>
            
            <BioSection>
                <BioYear>May 2003</BioYear>
                Born in Portland, Oregon
            </BioSection>
            
        </Section>

        <Section delay={.5}>
            <Heading as="h3" variant="section-title">
                online presence
            </Heading>
            <List>
                <ListItem>
                    <Link href="https://github.com/seangekim" target="_blank">
                    <Button
                        variant="ghost"
                        // colorScheme="teal"
                      
                        color={iconColor}
                        leftIcon={<IoLogoGithub />}
                        _hover={{ color: '#5a189a' }}
                    >
                        github
                    </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.linkedin.com/in/seangekim/" target="_blank">
                    <Button
                        variant="ghost"
                        // colorScheme="teal"
                        
                        color={iconColor}
                        leftIcon={<IoLogoLinkedin />}
                        _hover={{ color: '#5a189a' }}
                        
                    >
                        linkedin
                    </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="mailto:seangkim.dev@gmail.com" target="_blank">
                    <Button
                        variant="ghost"
                        // colorScheme="teal"
                       
                        color={iconColor}
                        leftIcon={<IoSend />}
                        _hover={{ color: '#5a189a' }}
                    >
                        seangkim.dev@gmail.com
                    </Button>
                    </Link>
                </ListItem>
          </List>
          {/* <Section>
            my spotify information
            <script src='../components/spotify.js' type="module"></script>
          </Section> */}

        </Section>
        </Container>
        </Layout>

        
    )
}

export default Page