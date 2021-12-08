import { Container, VStack, Button, Heading, useColorModeValue } from "@chakra-ui/react"

const Project = ({ name, description }) => {
    return (
        <Container maxW='500px' minW='200px' minH='240px' p='2em' fontSize='1.3em' bg={useColorModeValue('#f8f8f8', '#202023')} borderRadius='1em' marginY={8} color={useColorModeValue('#000', '#fff')}>
            <VStack align='flex-start'>
                <Heading as='h2' mb='1em' fontSize='1.6em' fontFamily='Ubuntu, sans-serif;' fontWeight='700'>{name}</Heading>
                <Heading as='description' pb='.3em' fontSize='.9em' fontFamily='Ubuntu, sans-serif;' fontWeight='400'>{description}</Heading>
                <Button colorScheme={useColorModeValue('red', 'blue')} maxH='2em' maxW='5em' fontFamily='Ubuntu, sans-serif;' fontWeight='500' _focus={{}}>View</Button>
            </VStack>
        </Container>
    )
}

export default Project