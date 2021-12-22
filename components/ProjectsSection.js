import { Container, useColorModeValue, Heading } from '@chakra-ui/react'
import Project from './Project'
import SlideBox from './AnimationComponents/SlideBox'

function ProjectsSection(){
    
    return (

        <Container bg={useColorModeValue('#000', 'bgWhite')} p='3em 0' maxW='100%' color='#000' id='projects'>
            <Container maxW='90%' p={0} centerContent>
                <Heading as='h1' w='fit-content' mb='.6em' color={useColorModeValue('#fff', '#000')} fontFamily='Ubuntu, sans-serif;' fontSize='3em' fontWeight='700'>My Projects</Heading>
                <SlideBox><Project name='Chatty' description='An app allowing users to chat in real-time' img='/img/Chatty-transparent.png' subpage='Chatty'/></SlideBox>
                <SlideBox><Project name='Portfolio Website' description='The site You&#39;re currently browsing ;)' img='/img/Website-transparent.png' subpage='Website'/></SlideBox>
                <SlideBox><Project name='Exoplanets' description='Query for any discovered exoplanet' img='/img/Exo-transparent.png' subpage='Exoplanets'/></SlideBox>
                <SlideBox><Project name='Saper' description='A minesweeping game' img='/img/Saper-transparent.png' subpage='Saper'/></SlideBox>
            </Container>
        </Container>

    )

}

export default ProjectsSection