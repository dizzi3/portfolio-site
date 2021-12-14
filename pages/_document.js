import {ColorModeScript} from '@chakra-ui/react'
import NextDocument, {Html, Head, Main, NextScript} from 'next/document'
import theme from './../styles/theme'

export default class Document extends NextDocument{
    render(){
        return(
            <Html lang="pl">
                <Head>
                    <link rel="shortcut icon" href="/img/logo-dark_hover.svg" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Delius&family=Lora:wght@400;700&family=Readex+Pro:wght@500&family=Roboto+Mono:wght@400;500;700&family=Ubuntu:wght@400;700&display=swap" rel="stylesheet"></link>
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