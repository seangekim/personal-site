import {Flex, Text, Link, List, ListItem, Button, Container , Box, Heading, Image, useColorModeValue} from "@chakra-ui/react"
import Section from'../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { BioSection, BioTitle } from '../components/bio'
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
            <Paragraph>Hey! I'm Sean, a developer based in Los Angeles with a passion for building digital services/stuff. I have a knack for all things launching products, from planning and designing, to solving real-life problems with code.
            </Paragraph>
            <br></br>
            <Paragraph>
            Currently, I'm pursuing my M.S. in Computer Science along with my B.S. in Computer Science and Business Administration w/ a minor in Philosophy at the University of Southern California.
            </Paragraph>
            <br></br>
            <Paragraph>
            When not working, you might find me reading in my hammock, cooking, or snowboarding. 
            </Paragraph>

            <Box align="center" my={4}>
                <NextLink href="/works">
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
                <Flex justifyContent="space-between" alignItems="center">
                <BioTitle>
                    <Link href="/works/floqast">
                        <Button 
                            variant="ghost"    
                            color={iconColor}
                            _hover={{color: bgColor}}
                        >
                            FloQast
                        </Button>
                    </Link>
                </BioTitle>
                    <Text>2024 - Present</Text>
                </Flex>
            </BioSection>
            
            <BioSection>
                <Flex justifyContent="space-between" alignItems="center">
                <BioTitle>
                    <Link href="/works/interactionlab">
                        <Button 
                            variant="ghost"    
                            color={iconColor}
                            _hover={{color: bgColor}}
                        >
                            The Interaction Lab
                        </Button>
                    </Link>
                </BioTitle>
                    <Text>Dec. 2022 - Present</Text>
                </Flex>
            </BioSection>

            <BioSection>
                <Flex justifyContent="space-between" alignItems="center">
                    <BioTitle>
                        <Link href="/works/hibiscus">
                        <Button 
                            variant="ghost"    
                            color={iconColor}
                            _hover={{color: bgColor}}
                        >
                            HackSC
                        </Button>
                        </Link>
                    </BioTitle>
                    <Text>Mar. 2023 - Present</Text>
                </Flex>
                
            </BioSection>

            <BioSection>
                <Flex justifyContent="space-between" alignItems="center">
                <BioTitle>
                        <Link href="/works/novus">
                        <Button 
                            variant="ghost"    
                            color={iconColor}
                            _hover={{color: bgColor}}
                        >
                            Novus Labs
                        </Button>
                        </Link>
                    </BioTitle>
                    <Text>May 2023 - Aug 2023</Text>
                </Flex>
                
            </BioSection>
            
            
            
        </Section>

        <Section delay={.5}>
            <Heading as="h3" variant="section-title">
                Online Presence
            </Heading>
            <List>
                <ListItem>
                    <Link href="https://github.com/seangekim" target="_blank">
                    <Button
                        variant="ghost"
                        // colorScheme="teal"
                      
                        color={iconColor}
                        leftIcon={<IoLogoGithub />}
                        _hover={{color: bgColor}}
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
                        _hover={{color: bgColor}}
                        
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
                        _hover={{color: bgColor}}
                    >
                        seangkim.dev@gmail.com
                    </Button>
                    </Link>
                </ListItem>
          </List>
       

        </Section>
        </Container>
        </Layout>

        
    )
}

export default Page