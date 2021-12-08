import { Container, Flex, Spacer, IconButton, VStack, Heading, Button, Image } from '@chakra-ui/react'
import {MoonIcon} from '@chakra-ui/icons'
import Menu from './Menu';

function WelcomeSection(){

    const logoImg = '/img/logo.svg';

    return (

        <Container w='100%' maxW='50%' pt='8em' pb='22em'>
            
            <Flex direction={{sm: 'column', md: 'row'}} textAlign='center'>

                <Flex w='100%'>
                    <Image src={logoImg} width='3em' height='3em' alt='logo'/>
                    <Spacer/>
                    <Flex>
                        <Menu direction='row' display={{ sm: 'none', md: 'flex'}}/>
                        <IconButton aria-label='Toggle night mode button' icon={<MoonIcon/>} colorScheme='blue' ml='1em'/>
                    </Flex>
                </Flex>
                
                <Menu direction='column' display={{ sm: 'flex', md: 'none'}}/>

            </Flex>

            <VStack mt='15em' align='left' spacing='.5rem'>
                <Heading as='h1' fontSize='3rem'>Michał Zapała</Heading>
                <Heading as='h2' fontSize='2rem'>Web Developer =)</Heading>
                <Button colorScheme='blue' maxW='8em'>About Me</Button>
            </VStack>

        </Container>

    )

}

export default WelcomeSection