import { Container, Flex, Spacer, IconButton, useColorModeValue, useColorMode, VStack, Box } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'
import StyledLink from './StyledLink'
import Logo from './Logo'

function ProjectNavbar({setContactFormDisplay}){

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Container minW='100%'>
            <Flex alignItems='center' mb={{sm: '3em', md: '7em'}}>
                            <a href='#home'><Logo smallDimensions='3em' mediumDimensions='4.5em' colorMode={colorMode}/></a>
                            <Spacer/>
                            <Flex display={{ sm: 'none', md: 'flex'}}>
                                <StyledLink href='/'>Home</StyledLink>
                                <StyledLink><Box onClick={() => setContactFormDisplay(true)}>Contact</Box></StyledLink>
                            </Flex>
                            <IconButton _focus={{}} aria-label='Toggle night mode' icon={<MoonIcon/>}
                                        colorScheme={useColorModeValue('red', 'blue')} onClick={toggleColorMode} ml='2em'/>
            </Flex>

            <VStack pb='5em' spacing='1em' display={{sm: 'flex', md: 'none'}}>
                <StyledLink href='/'>Home</StyledLink>
                <StyledLink><Box onClick={() => setContactFormDisplay(true)}>Contact</Box></StyledLink>
            </VStack>
        </Container>
    )

}

export default ProjectNavbar