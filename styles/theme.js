import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
    sm: '0px',
    md: '1150px',
    '2xl': '1536px'
})

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const styles = {
    global: props => ({
        body: {
            bg: mode('#f4f4f4', '#202023')(props),
        }
    })
}

const theme = extendTheme({
    breakpoints, config, styles
})

export default theme