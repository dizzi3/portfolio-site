import { Flex, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import StyledLink from './StyledLink'

function Menu({ direction, display, setContactFormDisplay }){

    return(
        <Flex direction={direction} display={display} mt={{sm: '5em', md: 0}} gridGap='1em'>

                <StyledLink href='/'>Home</StyledLink>

                <StyledLink href='#projects'>Works</StyledLink>

                <StyledLink><Box onClick={() => setContactFormDisplay('block')}>Contact</Box></StyledLink>

        </Flex>
    )

}

export default Menu