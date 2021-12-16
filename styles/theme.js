import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
    sm: '0px',
    md: '1150px',
    lg: '1400px',
    '2xl': '1536px'
})

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const styles = {
    global: props => ({
        html: {
            'scroll-behavior': 'smooth'
        },

        body: {
            bg: mode('#f4f4f4', '#202023')(props),
        }
    }),
}

const colors = {
    reddish: '#e33b44',
    blueish: '#90CDF4',
    bgWhite: '#f8f8f8',
}

const theme = extendTheme({
    breakpoints, config, styles, colors
})

export default theme