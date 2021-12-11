import { Flex } from '@chakra-ui/react'
import NextLink from 'next/link'
import StyledLink from './StyledLink'

function Menu({ direction, display }){

    return(
        <Flex direction={direction} display={display} mt={{sm: '6em', md: 0}}>

                <StyledLink href='/'>Home</StyledLink>

                <StyledLink href='#projects'>Works</StyledLink>

                <StyledLink href='/Contact'>Contact</StyledLink>

        </Flex>
    )

}

export default Menu