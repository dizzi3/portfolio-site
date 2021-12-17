import { Container, Flex, useColorModeValue, useColorMode, Image, Spacer, IconButton, Heading, Text, UnorderedList, ListItem, Button, VStack, Icon, Box } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'
import { FaGithub } from 'react-icons/fa'
import NextLink from 'next/link'
import Project from '../components/Project'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import ProjectNavbar from '../components/ProjectNavbar'
import { useState } from 'react'
import ContactForm from '../components/ContactForm'

function Chatty(){

    const [ contactFormDisplay, setContactFormDisplay ] = useState('none')

    return(
        
        <Container w='100%' maxW='100%' p={0} id='home'>

            <ContactForm displayProp={contactFormDisplay} setDisplayState={setContactFormDisplay}/>

            <Container w='100%' maxW='50%' pt='8em' pb='7em' color={useColorModeValue('#000', '#fff')}>

                    <ProjectNavbar setContactFormDisplay={setContactFormDisplay}/>

                    <Image src='/img/Chatty-fullsize.png' w='100%' border='1px solid #fff'/>

                    <Text fontFamily='DM Sans, sans-serif;' fontSize='1.4em' mt='1.5em'
                        borderBottom={useColorModeValue('1px solid #000', '1px solid #fff')} pb='2.5em'>
                        <Box color={useColorModeValue('reddish', 'blueish')} display='inline' fontFamily='Ubuntu, sans-serif;'><strong>Chatty</strong></Box> is a real-time chat interface where multiple users can interact with each 
                        other by sending messages either in private or to group of users by joining a channel.
                    </Text>

                    <Text fontFamily='Ubuntu, sans-serif;' fontSize='1.2em' mt='2.5em' mb='4em'>
                        <Box fontSize='1.1em' fontWeight='400' fontFamily='DM Sans, sans-serif;'>Technologies used:</Box>
                        <UnorderedList>
                            <ListItem color={useColorModeValue('reddish', 'blueish')}><Box color={useColorModeValue('black', 'white')}>React</Box></ListItem>
                            <ListItem color={useColorModeValue('reddish', 'blueish')}><Box color={useColorModeValue('black', 'white')}>Mongodb (mongoose)</Box></ListItem>
                            <ListItem color={useColorModeValue('reddish', 'blueish')}><Box color={useColorModeValue('black', 'white')}>Socket.io</Box></ListItem>
                            <ListItem color={useColorModeValue('reddish', 'blueish')}><Box color={useColorModeValue('black', 'white')}>Languages: 
                                <Text color={useColorModeValue('#ff7700' ,'#fff94d')} display='inline'> Javascript</Text>,
                                <Text color={useColorModeValue('#ae00ff', '#E33B44')} display='inline'> HTML</Text>, 
                                <Text color={useColorModeValue('#0073ff', '#8083FF')} display='inline'> CSS</Text>
                            </Box></ListItem>
                        </UnorderedList>
                    </Text>

                    <VStack spacing='1em'>

                        <a href='https://github.com/dizzi3/Chatty' target='_blank'>
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
                    <Project name='Exoplanets' description='Query for any discovered exoplanet' img='/img/Exo-transparent.png' subpage='Exoplanets'/>
                    <Project name='Saper' description='A minesweeping game' img='/img/Saper-transparent.png' subpage='Saper'/>
                </Container>
            </Container>

            <Footer/>

        </Container>
    )

}

export default Chatty;