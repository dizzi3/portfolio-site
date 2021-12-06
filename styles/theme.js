import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#000', '#202023')(props),
        }
    })
}

const theme = extendTheme({
    styles
})

export default theme