import { Container, VStack, Button, Heading, useColorModeValue } from "@chakra-ui/react"
import NextLink from 'next/link'

const Project = ({ name, description, img, subpage }) => {
    return (
        <NextLink href={'/' + subpage}>
            <Container maxW='500px' minW='200px' minH='240px' p='2em' fontSize='1.3em' bg={useColorModeValue('rgba(255, 255, 255, .0)', '#202023')}
                    borderRadius='1em' marginY={8} color={useColorModeValue('#fff', '#fff')} backgroundImage={'url("' + img + '")'}
                    border={useColorModeValue('1px solid #fff', 'none')} _hover={{ cursor: 'pointer' }} backgroundRepeat='no-repeat'>
                <VStack align='flex-start'>
                    <Heading as='h2' mb='1em' fontSize='1.6em' fontFamily='Ubuntu, sans-serif;' fontWeight='700'>{name}</Heading>
                    <Heading as='description' pb='.3em' fontSize='.9em' fontFamily='DM Sans, sans-serif;' fontWeight='400'>{description}</Heading>
                    <Button colorScheme={useColorModeValue('red', 'blue')} maxH='2em' maxW='5em' fontFamily='DM Sans, sans-serif;' fontWeight='500' _focus={{}}>View</Button>
                </VStack>
            </Container>
        </NextLink>
    )
}

export default Project