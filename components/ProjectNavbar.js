import { Container, Flex, Spacer, IconButton, useColorModeValue, useColorMode, Box } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'
import StyledLink from './StyledLink'
import Logo from './Logo'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import Sidebar from './Sidebar'

function ProjectNavbar({setContactFormDisplay}){

    const { colorMode, toggleColorMode } = useColorMode()
    const [ sidebarMenuDisplay, setSidebarMenuDisplay ] = useState('none')

    return (
        <Container minW='100%' m={0} p={0}>
            <Sidebar display={sidebarMenuDisplay} setDisplay={setSidebarMenuDisplay} setContactFormDisplay={setContactFormDisplay} projectPage={true}/>

            <Flex alignItems='center' mb={{sm: '3em', md: '7em'}}>
                    <IconButton _focus={{}} aria-label='Side menu' icon={<HamburgerIcon/>} colorScheme={useColorModeValue('red', 'blue')} mr='1em'
                                                display={{sm: 'flex', md: 'none'}} onClick={() => setSidebarMenuDisplay('flex')}/>
                    <a href='#home'><Logo colorMode={colorMode}/></a>
                    <Spacer/>
                    <Flex display={{ sm: 'none', md: 'flex'}}>
                        <StyledLink href='/'>Home</StyledLink>
                        <StyledLink><Box onClick={() => setContactFormDisplay('block')}>Contact</Box></StyledLink>
                    </Flex>
                    <IconButton _focus={{}} aria-label='Toggle night mode' icon={<MoonIcon/>}
                                colorScheme={useColorModeValue('red', 'blue')} onClick={toggleColorMode} ml='2em'/>
            </Flex>

        </Container>
    )

}

export default ProjectNavbar