import { Flex, Box } from '@chakra-ui/react'
import StyledLink from './StyledLink'

function Menu({ direction, display, setContactFormDisplay }){

    return(
        <Flex direction={direction} display={display} mt={{sm: '5em', md: 0}} gridGap='1em'
                    animate={{ opacity: 1}} initial={{ opacity: 0 }} transition={{ duration: 3 }}>

                <StyledLink href='/'>Home</StyledLink>

                <StyledLink href='#projects'>Works</StyledLink>

                <StyledLink><Box onClick={() => setContactFormDisplay('block')}>Contact</Box></StyledLink>

        </Flex>
    )

}

export default Menu