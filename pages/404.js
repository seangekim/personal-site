import NextLink from 'next/link'
import{
    Box,
    Heading,
    Container,
    Divider,
    Button,
    Text
} from '@chakra-ui/react'

const NotFound = () => {
    return(
        <Container>
            <></>
            <Heading as="h1">Not Found</Heading>
            <Text>The page you&apos;re looking for ain't here...</Text>
            <Divider my={6} />
            
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Go home!</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound