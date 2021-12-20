import { Container, Flex, useColorModeValue, useColorMode, Image, Spacer, IconButton, Heading, Text, UnorderedList, ListItem, Button, VStack, Icon, Box } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import Project from '../components/Project'
import Footer from '../components/Footer'
import ProjectNavbar from '../components/ProjectNavbar'
import { useState } from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import SlideBox from '../components/AnimationComponents/SlideBox'

function Chatty(){

    const [ contactFormDisplay, setContactFormDisplay ] = useState('none')

    return(
        
        <Container w='100%' maxW='100%' p={0} id='home' position='relative'>

            <ContactForm displayProp={contactFormDisplay} setDisplayState={setContactFormDisplay}/>

            <Container w='100%' maxW={{sm: '100%', md: '50%'}} pt={{sm: '2.5em', md:'8em'}} pb={{sm: '4em', md: '7em'}} color={useColorModeValue('#000', '#fff')}>

                    <ProjectNavbar setContactFormDisplay={setContactFormDisplay}/>

                    <Image src='/img/Saper.png' w='100%' />

                    <Text fontFamily='DM Sans, sans-serif;' fontSize='1.4em' mt='1.5em'
                        borderBottom={useColorModeValue('1px solid #000', '1px solid #fff')} pb='2.5em'>
                        <Box color={useColorModeValue('reddish', 'blueish')} display='inline' fontFamily='Ubuntu, sans-serif;'><strong>Saper </strong></Box> 
                        is a remake of a classic minesweeping game. Map is generated randomly. User can choose map size and number of bombs.
                    </Text>

                    <Text fontFamily='Ubuntu, sans-serif;' fontSize='1.2em' mt='2.5em' mb='4em'>
                        <Box fontSize='1.1em' fontWeight='400' fontFamily='DM Sans, sans-serif;'>Technologies used:</Box>
                        <UnorderedList>
                            <ListItem color={useColorModeValue('reddish', 'blueish')}><Box color={useColorModeValue('black', 'white')}>QT</Box></ListItem>
                            <ListItem color={useColorModeValue('reddish', 'blueish')}><Box color={useColorModeValue('black', 'white')}>Languages: 
                                <Text color={useColorModeValue('#ff7700' ,'#fff94d')} display='inline'> C++</Text>
                            </Box></ListItem>
                        </UnorderedList>
                    </Text>

                    <VStack spacing='1em'>

                        <a href='https://github.com/dizzi3/Saper' target='_blank'>
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
                    <SlideBox><Project name='Exoplanets' description='Query for any discovered exoplanet' img='/img/Exo-transparent.png' subpage='Exoplanets'/></SlideBox>
                </Container>
            </Container>

            <Footer/>

        </Container>
    )

}

export default Chatty;