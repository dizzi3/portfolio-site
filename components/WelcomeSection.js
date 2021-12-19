import ContactForm from './ContactForm/ContactForm';
import { Container, Flex, Spacer, IconButton, VStack, Heading, Button, Box, useColorMode, useColorModeValue, Center, Icon } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Menu from './Menu';
import Logo from './Logo';
import DropdownName from './TextAnimations/DropdownName';
import AppearingDescription from './TextAnimations/AppearingDescription';
import FlexAppear from './AnimationComponents/FlexAppear';
import FlexDropdown from './AnimationComponents/FlexDropdown';

function WelcomeSection(){

    const { colorMode, toggleColorMode } = useColorMode()
    const [ contactFormDisplay, setContactFormDisplay ] = useState('none')

    const MotionBox = motion(Box)

    return (

        <Container maxW='100%' w='100%'>
            <Container maxW={{sm: '100%', md: '50%'}} pt={{sm: '4em', md: '8em'}} pb={{sm: '8em', md: '24em'}} color={useColorModeValue('#000', '#fff')} id='home' position='relative'>
                
                <FlexDropdown duration={2} distance='-150px' direction={{sm: 'column', md: 'row'}} alignItems='center'>

                    <Flex w='100%' alignItems='center'>
                        <a href='#home'><Logo smallDimensions='3em' mediumDimensions='4.5em' colorMode={colorMode}/></a>
                        <Spacer/>
                        <Flex>
                            <Menu direction='row' display={{ sm: 'none', md: 'flex'}} setContactFormDisplay={setContactFormDisplay}/>
                            <IconButton _focus={{}} aria-label='Toggle night mode' icon={<MoonIcon/>} colorScheme={useColorModeValue('red', 'blue')} ml='2em' onClick={() => {toggleColorMode();}}/>
                        </Flex>
                    </Flex>
                    
                    <Menu direction='column' display={{ sm: 'flex', md: 'none'}} setContactFormDisplay={setContactFormDisplay}/>

                </FlexDropdown>

                <Flex direction={{sm:'column', md: 'column', lg: 'row',}} pt={{ sm: '6em', md: '15em' }}>
                    <VStack align='left' spacing='.8rem' w='fit-content'>
                        <DropdownName delay={2.2}/>
                        <AppearingDescription delay={3.5}/>
                        <FlexAppear duration={3} delay={7.5}><Button colorScheme={useColorModeValue('red', 'blue')} maxW={{sm: '7em', md: '10em'}} fontFamily='DM Sans, sans-serif;' fontWeight='500' fontSize='1.1em' 
                                color={useColorModeValue('#000', '#000')} _focus={{}} onClick={() => setContactFormDisplay('block')}>About Me</Button></FlexAppear>
                    </VStack>

                    <Spacer/>
                    
                    <Center>
                        <a href='https://github.com/dizzi3' target='_blank'>
                            <FlexAppear duration={3} delay={7.5}><MotionBox whileHover={{ scale: [1, 1.12, 1] }} transition={{ duration: .8, type: 'spring', bounce: .7 }}>
                                 <Icon as={FaGithub} w='8em' h='8em' _hover={{ color: useColorModeValue('reddish', 'blueish'), cursor: 'pointer' }}
                                        mt={{sm: '6em', md:'8em', lg: 0}} />
                                </MotionBox></FlexAppear>
                        </a>
                    </Center>

                </Flex>

            </Container>

            <ContactForm displayProp={contactFormDisplay} setDisplayState={setContactFormDisplay}/>
            
        </Container>

    )

}

export default WelcomeSection