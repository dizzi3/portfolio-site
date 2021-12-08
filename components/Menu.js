import { Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

function Menu({ direction, display }){

    return(
        <Flex direction={direction} display={display} mt={{sm: '6em', md: 0}}>

            <NextLink href='/'>
                <Link p={{sm: '.3em 0', md: '0 1em'}} fontSize='1.5rem' fontFamily='Ubuntu, sans-serif;'>Home</Link>
            </NextLink>

            <NextLink href='/'>
                <Link p={{sm: '.3em 0', md: '0 1em'}} fontSize='1.5rem' fontFamily='Ubuntu, sans-serif;'>Works</Link>
            </NextLink>

            <NextLink href='/' >
                <Link p={{sm: '.3em 0', md: '0 1em'}} fontSize='1.5rem' fontFamily='Ubuntu, sans-serif;'>Contact</Link>
            </NextLink>

        </Flex>
    )

}

export default Menu