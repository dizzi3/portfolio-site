import { Container, Flex, useColorModeValue, useColorMode, Image, Spacer, IconButton, Heading, Text, UnorderedList, ListItem, Button, VStack, Icon, Box } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'
import { FaGithub } from 'react-icons/fa'
import NextLink from 'next/link'
import Project from '../components/Project'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import ProjectNavbar from '../components/ProjectNavbar'
import ContactForm from '../components/ContactForm'
import { useState } from 'react'
import SlideBox from '../components/AnimationComponents/SlideBox'

function Chatty(){

    const [ contactFormDisplay, setContactFormDisplay ] = useState('none')

    return(
        
        <Container w='100%' maxW='100%' p={0} id='home'>

            <ContactForm displayProp={contactFormDisplay} setDisplayState={setContactFormDisplay}/>

            <Container w='100%' maxW='50%' pt='8em' pb='7em' color={useColorModeValue('#000', '#fff')}>

                    <ProjectNavbar setContactFormDisplay={setContactFormDisplay}/>

                    <Image src='/img/Exo1.png' w='100%' border='1px solid #fff'/>

                    <Text fontFamily='DM Sans, sans-serif;' fontSize='1.4em' mt='1.5em'
                        borderBottom={useColorModeValue('1px solid #000', '1px solid #fff')} pb='2.5em'>
                        <Box color={useColorModeValue('reddish', 'blueish')} display='inline' fontFamily='Ubuntu, sans-serif;'><strong>Exoplanets </strong></Box> 
                        is a program which allows you to query for any discovered exoplanet. It uses NASA's Exoplanet Archive's API to fetch data into table.
                         Search is available depending on planet's year of discovery, discovery method, discovery facility etc.
                    </Text>

                    <Text fontFamily='Ubuntu, sans-serif;' fontSize='1.2em' mt='2.5em' mb='4em'>
                        <Box fontSize='1.1em' fontWeight='400' fontFamily='DM Sans, sans-serif;'>Technologies used:</Box>
                        <UnorderedList>
                            <ListItem color={useColorModeValue('reddish', 'blueish')}><Box color={useColorModeValue('black', 'white')}>JavaFX</Box></ListItem>
                            <ListItem color={useColorModeValue('reddish', 'blueish')}><Box color={useColorModeValue('black', 'white')}>Languages: 
                                <Text color={useColorModeValue('#ff7700' ,'#fff94d')} display='inline'> Java</Text>,
                                <Text color={useColorModeValue('#0073ff', '#8083FF')} display='inline'> CSS</Text>
                            </Box></ListItem>
                        </UnorderedList>
                    </Text>

                    <VStack spacing='1em'>

                        <a href='https://github.com/dizzi3/NASA-EXOPLANETS' target='_blank'>
                            <Button fontFamily='DM Sans, sans-serif;' fontSize='1em' colorScheme={useColorModeValue('red', 'blue')} 
                            _focus={{}} fontWeight='500'>

                                View Source 
                                <Icon as={FaGithub} w='1em' h='1em' ml='.3em'/>

                            </Button>
                        </a>

                    </VStack>


            </Container>

            <Container bg={useColorModeValue('#000', 'bgWhite')} p='3em 0' maxW='100%' color='#000' w='100%'>
                <Container maxW='90%' p={0} centerContent>
                    <Heading as='h2' w='fit-content' mb='.4em' color={useColorModeValue('#fff', '#000')} fontFamily='Ubuntu, sans-serif;' fontSize='2em' fontWeight='700'>Check out my other projects!</Heading>
                    <SlideBox><Project name='Chatty' description='An app allowing users to chat in real-time' img='/img/Chatty-transparent.png' subpage='Chatty'/></SlideBox>
                    <SlideBox><Project name='Saper' description='A minesweeping game' img='/img/Saper-transparent.png' subpage='Saper'/></SlideBox>
                </Container>
            </Container>

            <Footer/>

        </Container>
    )

}

export default Chatty;