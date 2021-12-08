import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
    sm: '0px',
    md: '1150px',
    '2xl': '1536px'
})

const styles = {
    global: props => ({
        body: {
            bg: mode('#000', '#202023')(props),
        }
    })
}

const theme = extendTheme({
    styles, breakpoints
})

export default theme