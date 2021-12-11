import { Container, VStack, Image, Link, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

function Footer(){

    const logoImg = '/img/logo' + useColorModeValue('', '-dark') + '.svg';

    return(

        <Container maxW='50%' p='2em' color={useColorModeValue('#000', '#fff')}>
            <VStack>
                <a href='#home'><Image src={logoImg} width='3em' height='3em' alt='logo'/></a>
                <a target='_blank' href='https://github.com/dizzi3' ><Link fontSize='1.3rem' fontFamily='Ubuntu, sans-serif;' fontWeight='700' _hover={{color: useColorModeValue('reddish', 'blueish')}}>Github</Link></a>
                <Text fontFamily='DM Sans, sans-serif;'>&#169; 2021 Michał Zapała</Text>
            </VStack>
        </Container>

    )

}

export default Footer