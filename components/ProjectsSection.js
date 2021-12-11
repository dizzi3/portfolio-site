import { Container, useColorModeValue, Heading } from '@chakra-ui/react'
import Project from './Project'

function ProjectsSection(){

    return (

        <Container bg={useColorModeValue('#000', 'bgWhite')} p='3em 0' maxW='100%' color='#000' id='projects'>
            <Container maxW='90%' p={0} centerContent>
                <Heading as='h1' w='fit-content' mb='.6em' color={useColorModeValue('#fff', '#000')} fontFamily='Ubuntu, sans-serif;' fontSize='3em' fontWeight='700'>My Projects</Heading>
                <Project name='Chatty' description='An app allowing users to chat in real-time' img='/img/Chatty-transparent.png' subpage='Chatty'/>
                <Project name='Exoplanets' description='Query for any discovered exoplanet' img='/img/Exo-transparent.png'/>
                <Project name='Saper' description='A minesweeping game' img='/img/Saper-transparent.png'/>
            </Container>
        </Container>

    )

}

export default ProjectsSection