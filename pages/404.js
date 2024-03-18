import NextLink from 'next/link'
import{
    Box,
    Heading,
    Container,
    Divider,
    Button,
    Text,
    useColorModeValue
} from '@chakra-ui/react'

const NotFound = () => {
    const bgColor = useColorModeValue('#be864e', '#5a189a');
    const iconColor = useColorModeValue('black', 'white');

    return(
        <Container>
            <></>
            <Heading as="h1">Not Found</Heading>
            <Text>The page you&apos;re looking for ain't here...</Text>
            <Divider my={6} />
            
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button bg={bgColor}
                        color={iconColor}>Go home!</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound