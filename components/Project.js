import { Container, VStack, Button, Heading, useColorModeValue } from "@chakra-ui/react"

const Project = ({ name, description }) => {
    return (
        <Container fontSize='1.3em' p='2em' maxW='500px' bg={useColorModeValue('#f8f8f8', '#202023')} borderRadius='1em' marginY={8} color={useColorModeValue('#000', '#fff')} minW='200px'>
            <VStack align='flex-start'>
                <Heading as='h2' fontSize='1.8em'>{name}</Heading>
                <Heading as='description' fontSize='1.3em'>{name}</Heading>
                <Button colorScheme='blue'>View</Button>
            </VStack>
        </Container>
    )
}

export default Project