import { Container, Flex, Spacer, IconButton, VStack, Heading, Button, Image, useColorMode, useColorModeValue } from '@chakra-ui/react'
import {MoonIcon} from '@chakra-ui/icons'
import Menu from './Menu';

function WelcomeSection(){

    const logoImg = '/img/logo' + useColorModeValue('', '-dark') + '.svg';

    const { toggleColorMode } = useColorMode()

    return (

        <Container w='100%' maxW='50%' pt='8em' pb={{sm: '15em', md: '24em'}} color={useColorModeValue('#000', '#fff')}>
            
            <Flex direction={{sm: 'column', md: 'row'}} alignItems='center'>

                <Flex w='100%' alignItems='center'>
                    <a href='#'><Image src={logoImg} width={{sm: '3em', md: '4.5em'}} height={{sm: '3em', md: '4.5em'}} alt='logo'/></a>
                    <Spacer/>
                    <Flex>
                        <Menu direction='row' display={{ sm: 'none', md: 'flex'}}/>
                        <IconButton _focus={{}} aria-label='Toggle night mode button' icon={<MoonIcon/>} colorScheme={useColorModeValue('red', 'blue')} ml='1em' onClick={toggleColorMode}/>
                    </Flex>
                </Flex>
                
                <Menu direction='column' display={{ sm: 'flex', md: 'none'}}/>

            </Flex>

            <VStack mt={{sm: '9em', md: '15em'}} align='left' spacing='.8rem'>
                <Heading as='u' fontSize={{sm: '2.5rem', md: '3.5rem'}} textUnderlineOffset='.1em' fontFamily='Ubuntu, sans-serif;' fontWeight='500' letterSpacing='.15em'>Michał Zapała</Heading>
                <Heading as='h2' fontSize={{sm: '1.4rem', md: '2.2rem'}} fontFamily='Ubuntu, sans-serif;' fontWeight='400'>Web Developer =)</Heading>
                <Button colorScheme={useColorModeValue('red', 'blue')} maxW={{sm: '7em', md: '10em'}} fontFamily='Ubuntu, sans-serif' fontWeight='500' color={useColorModeValue('#000', '#000')} _focus={{}}>About Me</Button>
            </VStack>

        </Container>

    )

}

export default WelcomeSection