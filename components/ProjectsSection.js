import { Container } from '@chakra-ui/react'
import Project from './Project'

function ProjectsSection(){

    return (

        <Container bg='#f8f8f8' p='3em 0' maxW='100%' color='#000'>
            <Container maxW='50%' p={0}>
                <Project name='Project 1' description='Description' />
                <Project name='Project 2' description='Description' />
                <Project name='Project 3' description='Description' />
            </Container>
        </Container>

    )

}

export default ProjectsSection