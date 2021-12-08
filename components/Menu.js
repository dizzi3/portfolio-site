import { Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

function Menu({ direction, display }){

    return(
        <Flex direction={direction} display={display} mt={{sm: '4em', md: 0}}>

            <NextLink href='/'>
                <Link p={{sm: 0, md: '0 1em'}} fontSize='1.5rem'>Home</Link>
            </NextLink>

            <NextLink href='/'>
                <Link p={{sm: 0, md: '0 1em'}} fontSize='1.5rem'>Works</Link>
            </NextLink>

            <NextLink href='/' >
                <Link p={{sm: 0, md: '0 1em'}} fontSize='1.5rem'>Contact</Link>
            </NextLink>

        </Flex>
    )

}

export default Menu