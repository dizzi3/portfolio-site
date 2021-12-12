import { Container, Flex, useColorModeValue, useColorMode, Image, Spacer, IconButton, Heading, Text, UnorderedList, ListItem, Button, VStack, Icon, Box } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'
import { FaGithub } from 'react-icons/fa'
import NextLink from 'next/link'
import Project from '../components/Project'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import ProjectNavbar from '../components/ProjectNavbar'

function Chatty(){

    const { colorMode, toggleColorMode } = useColorMode()

    return(
        
        <Container w='100%' maxW='100%' p={0} id='home'>
            <Container w='100%' maxW='50%' pt='8em' pb='7em' color={useColorModeValue('#000', '#fff')}>

                    <ProjectNavbar/>

                    <Image src='/img/Saper.png' w='100%' />

                    <Text fontFamily='DM Sans, sans-serif;' fontSize='1.4em' mt='1.5em'
                        borderBottom={useColorModeValue('1px solid #000', '1px solid #fff')} pb='2.5em'>
                        <Box color={useColorModeValue('reddish', 'blueish')} display='inline' fontFamily='Ubuntu, sans-serif;'><strong>Saper </strong></Box> 
                        is a remake of a classic minesweeping game. Map is generated randomly. User can choose it's size and number of bombs.
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
                    <Project name='Chatty' description='An app allowing users to chat in real-time' img='/img/Chatty-transparent.png'/>
                    <Project name='Exoplanets' description='Query for any discovered exoplanet' img='/img/Exo-transparent.png'/>
                </Container>
            </Container>

            <Footer/>

        </Container>
    )

}

export default Chatty;