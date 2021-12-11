import { Container, Flex, Spacer, IconButton, VStack, Heading, Button, Image, useColorMode, useColorModeValue, Icon } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'
import Menu from './Menu';
import { FaGithub } from 'react-icons/fa'

function WelcomeSection(){

    const logoImg = '/img/logo' + useColorModeValue('', '-dark') + '.svg';

    const { toggleColorMode } = useColorMode()

    return (

        <Container w='100%' maxW='50%' pt='8em' pb={{sm: '15em', md: '24em'}} color={useColorModeValue('#000', '#fff')} id='home'>
            
            <Flex direction={{sm: 'column', md: 'row'}} alignItems='center'>

                <Flex w='100%' alignItems='center'>
                    <a href='#home'><Image src={logoImg} width={{sm: '3em', md: '4.5em'}} height={{sm: '3em', md: '4.5em'}} alt='logo'/></a>
                    <Spacer/>
                    <Flex>
                        <Menu direction='row' display={{ sm: 'none', md: 'flex'}}/>
                        <IconButton _focus={{}} aria-label='Toggle night mode' icon={<MoonIcon/>} colorScheme={useColorModeValue('red', 'blue')} ml='1em' onClick={toggleColorMode}/>
                    </Flex>
                </Flex>
                
                <Menu direction='column' display={{ sm: 'flex', md: 'none'}}/>

            </Flex>

            <Flex direction={{sm:'column', md: 'column', lg: 'row',}} pt={{ sm: '9em', md: '15em' }}>
                <VStack align='left' spacing='.8rem' w='fit-content'>
                    <Heading as='u' fontSize={{sm: '2.5rem', md: '3.5rem'}} textUnderlineOffset='.1em' fontFamily='Ubuntu, sans-serif;' fontWeight='500' letterSpacing='.15em'>Michał Zapała</Heading>
                    <Heading as='h2' fontSize={{sm: '1.4rem', md: '2.2rem'}} fontFamily='Ubuntu, sans-serif;' fontWeight='400'>Web Developer =)</Heading>
                    <Button colorScheme={useColorModeValue('red', 'blue')} maxW={{sm: '7em', md: '10em'}} fontFamily='Ubuntu, sans-serif' fontWeight='500' color={useColorModeValue('#000', '#000')} _focus={{}}>About Me</Button>
                </VStack>

                <Spacer/>
                
                <a href='https://github.com/dizzi3' target='_blank'><Icon as={FaGithub} w='8em' h='8em' _hover={{ color: useColorModeValue('reddish', 'blueish'),
                 cursor: 'pointer' }} mt={{sm: '4em', md:'4em', lg: 0}}/></a>

            </Flex>

        </Container>

    )

}

export default WelcomeSection