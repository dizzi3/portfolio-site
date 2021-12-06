import { Container, Flex, Spacer, IconButton, Link, VStack, Heading, Button, Image } from '@chakra-ui/react'
import {MoonIcon} from '@chakra-ui/icons'
import NextLink from 'next/link'

function WelcomeSection(){

    const logoImg = '/img/logo.svg';

    return (

        <Container w='100%' p='3em 0' maxW='50%'>
            
            <Flex>
                <Image src={logoImg} width='3em' height='3em' alt='logo'/>
                <Spacer/>
                <IconButton aria-label='Toggle night mode button' icon={<MoonIcon/>} />
            </Flex>

            <VStack spacing={4} mt={10}>

                <NextLink href='/'>
                    <Link fontSize='1.5rem'>Home</Link>
                </NextLink>

                <NextLink href='/'>
                    <Link fontSize='1.5rem'>Works</Link>
                </NextLink>

                <NextLink href='/'>
                    <Link fontSize='1.5rem'>Contact</Link>
                </NextLink>

            </VStack>

            <VStack mt={20} align='left'>
                <Heading as='h1' fontSize='3rem'>Michał Zapała</Heading>
                <Heading as='h2' fontSize='2rem'>Disciplined developer =)</Heading>
                <Button colorScheme='blue' maxW='8em'>About Me</Button>
            </VStack>

        </Container>

    )

}

export default WelcomeSection