import { Container, useColorModeValue } from '@chakra-ui/react'
import Project from './Project'

function ProjectsSection(){

    return (

            <Container bg={useColorModeValue('#000', '#f8f8f8')} p='3em 0' maxW='100%' color='#000'>
            <Container maxW='90%' p={0} justifyContent='center' border='1px solid red'>
                <Project name='Project 1' description='Description' />
                <Project name='Project 2' description='Description' />
                <Project name='Project 3' description='Description' />
            </Container>
        </Container>

    )

}

export default ProjectsSection