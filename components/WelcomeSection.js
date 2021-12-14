import { Container, Flex, Spacer, IconButton, VStack, Heading, Button, Image, useColorMode, useColorModeValue, Center, Icon } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'
import Menu from './Menu';
import { FaGithub } from 'react-icons/fa'
import Logo from './Logo';
import { useState } from 'react';
import ContactForm from './ContactForm';

function WelcomeSection(){

    const { colorMode, toggleColorMode } = useColorMode()
    const [ contactFormDisplay, setContactFormDisplay ] = useState('none')

    return (

        <Container w='100%' maxW='50%' pt={{sm: '4em', md: '8em'}} pb={{sm: '8em', md: '24em'}} color={useColorModeValue('#000', '#fff')} id='home'>
            
            <Flex direction={{sm: 'column', md: 'row'}} alignItems='center'>

                <Flex w='100%' alignItems='center'>
                    <a href='#home'><Logo smallDimensions='3em' mediumDimensions='4.5em' colorMode={colorMode}/></a>
                    <Spacer/>
                    <Flex>
                        <Menu direction='row' display={{ sm: 'none', md: 'flex'}}/>
                        <IconButton _focus={{}} aria-label='Toggle night mode' icon={<MoonIcon/>} colorScheme={useColorModeValue('red', 'blue')} ml='2em' onClick={() => {toggleColorMode();}}/>
                    </Flex>
                </Flex>
                
                <Menu direction='column' display={{ sm: 'flex', md: 'none'}}/>

            </Flex>

            <Flex direction={{sm:'column', md: 'column', lg: 'row',}} pt={{ sm: '6em', md: '15em' }}>
                <VStack align='left' spacing='.8rem' w='fit-content'>
                    <Heading mb={{sm: '.1em', md: 0}} as='u' fontSize={{sm: '2.5rem', md: '3.5rem'}} textUnderlineOffset='.1em' fontFamily='Ubuntu, sans-serif;' fontWeight='500' letterSpacing={{sm: '.1em', md: '.15em'}}>Michał Zapała</Heading>
                    <Heading as='h2' fontSize={{sm: '1.4rem', md: '2.2rem'}} fontFamily='Ubuntu, sans-serif;' fontWeight='400'>Web Developer =)</Heading>
                    <Button colorScheme={useColorModeValue('red', 'blue')} maxW={{sm: '7em', md: '10em'}} fontFamily='DM Sans, sans-serif;' fontWeight='500' fontSize='1.1em' 
                            color={useColorModeValue('#000', '#000')} _focus={{}} onClick={() => setContactFormDisplay('block')}>About Me</Button>
                </VStack>

                <Spacer/>
                
                <Center><a href='https://github.com/dizzi3' target='_blank'><Icon as={FaGithub} w='8em' h='8em' _hover={{ color: useColorModeValue('reddish', 'blueish'),
                 cursor: 'pointer' }} mt={{sm: '6em', md:'8em', lg: 0}}/></a></Center>

            </Flex>

            <ContactForm displayProp={contactFormDisplay} setDisplayState={setContactFormDisplay}/>

        </Container>

    )

}

export default WelcomeSection