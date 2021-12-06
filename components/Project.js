import { Container, VStack, Button, Heading } from "@chakra-ui/react"

const Project = ({ name, description }) => {
    return (
        <Container fontSize='1.3em' p='2em' maxW='50%' bg='#202023' borderRadius='1em' marginY={8} color='#fff'>
            <VStack align='flex-start'>
                <Heading as='h2' fontSize='1.8em'>{name}</Heading>
                <Heading as='description' fontSize='1.3em'>{name}</Heading>
                <Button colorScheme='blue'>View</Button>
            </VStack>
        </Container>
    )
}

export default Project