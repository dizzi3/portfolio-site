import {ColorModeScript} from '@chakra-ui/react'
import NextDocument, {Html, Head, Main, NextScript} from 'next/document'
import theme from './../styles/theme'

export default class Document extends NextDocument{
    render(){
        return(
            <Html lang="pl">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Ubuntu:wght@400;700&display=swap" rel="stylesheet"></link>
                </Head>

                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}