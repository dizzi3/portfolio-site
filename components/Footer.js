import { Container, VStack, Image, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

function Footer(){

    const logoImg = '/img/logo.svg';

    return(

        <Container maxW='50%' p='2em'>
            <VStack>
                <Image src={logoImg} width='3em' height='3em' alt='logo'/>
                <a target='_blank' href='https://github.com/dizzi3' ><Link fontSize='1.3rem'>Github</Link></a>
                <Text>&#169;2021 Michał Zapała</Text>
            </VStack>
        </Container>

    )

}

export default Footer