import { Image, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

function Logo({ smallDimensions = '60px', mediumDimensions = '70px', colorMode }){

    const logoImg = '/img/logo' + useColorModeValue('', '-dark') + '.svg';
    const logoImgHover = '/img/logo' + useColorModeValue('', '-dark') + '_hover.svg';

    const [logoImgSrc, setLogoImgSrc] = useState(colorMode === 'light' ? '/img/logo.svg' : '/img/logo-dark.svg')

    useEffect(() => {

        setLogoImgSrc(colorMode === 'light' ? '/img/logo.svg' : '/img/logo-dark.svg')
        
    }, [colorMode] )

    function onHover(){
        setLogoImgSrc(logoImgHover);
    }

    function onHoverOff(){
        setLogoImgSrc(logoImg);
    }

    return(

        <Image src={logoImgSrc} onMouseEnter={onHover} onMouseLeave={onHoverOff} 
                width={{sm: smallDimensions, md: mediumDimensions}}
                height={{sm: smallDimensions, md: mediumDimensions}} alt='logo'/>

    )

}

export default Logo