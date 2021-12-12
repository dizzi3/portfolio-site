import { Container, VStack, Link, Text, useColorModeValue, useColorMode } from '@chakra-ui/react'
import StyledLink from './StyledLink';
import Logo from './Logo';

function Footer(){

    const logoImg = '/img/logo' + useColorModeValue('', '-dark') + '.svg';

    const {colorMode, toggleColorMode} = useColorMode()

    return(

        <Container maxW='50%' p='2em' color={useColorModeValue('#000', '#fff')}>
            <VStack>
                <a href='#home'><Logo smallDimensions='3em' mediumDimensions='3em' colorMode={colorMode}/></a>
                <StyledLink href='https://github.com/dizzi3' target='_blank'><Link fontSize='1.3rem' fontFamily='Ubuntu, sans-serif;' fontWeight='700' _hover={{color: useColorModeValue('reddish', 'blueish')}}>Github</Link></StyledLink>
                <Text fontFamily='DM Sans, sans-serif;'>&#169; 2021 Michał Zapała</Text>
            </VStack>
        </Container>

    )

}

export default Footer