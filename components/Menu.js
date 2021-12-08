import { Flex, Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

function Menu({ direction, display }){

    return(
        <Flex direction={direction} display={display} mt={{sm: '6em', md: 0}}>

            <NextLink href='/'>
                <Link p={{sm: '.3em 0', md: '0 1em'}} fontSize='1.5rem' fontFamily='Ubuntu, sans-serif;' fontWeight='500' _hover={{color: useColorModeValue('#ff0100', '#65b5e9')}}>Home</Link>
            </NextLink>

            <NextLink href='/'>
                <Link p={{sm: '.3em 0', md: '0 1em'}} fontSize='1.5rem' fontFamily='Ubuntu, sans-serif;' fontWeight='500' _hover={{color: useColorModeValue('#ff0100', '#65b5e9')}}>Works</Link>
            </NextLink>

            <NextLink href='/' >
                <Link p={{sm: '.3em 0', md: '0 1em'}} fontSize='1.5rem' fontFamily='Ubuntu, sans-serif;' fontWeight='500' _hover={{color: useColorModeValue('#ff0100', '#65b5e9')}}>Contact</Link>
            </NextLink>

        </Flex>
    )

}

export default Menu