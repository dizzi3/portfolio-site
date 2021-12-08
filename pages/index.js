import WelcomeSection from "../components/WelcomeSection";
import ProjectsSection from '../components/ProjectsSection'
import { Container, Head } from '@chakra-ui/react'
import Footer from "../components/Footer";

function Home(){
    return(

        <Container maxW='100%' p={0} color="#fff"> 

            <title>Michał Zapała - Homepage</title>

            <WelcomeSection/>
            <ProjectsSection/>
            <Footer/>

        </Container>
    )
}

export default Home;