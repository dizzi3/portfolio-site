import { Box, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

function DropdownName(props){

    const [animationFinished, setAnimationFinished] = useState(false)

    const MotionHeading = (props) => {
        return(
            <Heading mb={{sm: '.1em', md: 0}} fontSize={{sm: '2.5rem', md: '3.5rem'}} textUnderlineOffset='.1em' fontFamily='Ubuntu, sans-serif;'
                    fontWeight='500' letterSpacing={{sm: '.1em', md: '.15em'}} display='inline'>
                {props.children}
            </Heading>
        )
    }

    const UnderlineHeading = (props) => {

        const MotionHeading = motion(Heading)

        return (

            <MotionHeading animate={{opacity: 1}} initial={{opacity: 0}} as='u' mb={{sm: '.1em', md: 0}} transition={{duration: 2.5}} fontSize={{sm: '2.5rem', md: '3.5rem'}} textUnderlineOffset='.1em' fontFamily='Ubuntu, sans-serif;'
                            fontWeight='500' letterSpacing={{sm: '.1em', md: '.15em'}} display='inline' position='absolute'>
                {props.children}
            </MotionHeading>
        )
    }

    const MotionBox = (props) => {
        const MB = motion(Box)

        return (
            <MB display='inline' initial={animationFinished ? false : {position: 'relative', top: '-450px'}} animate={{top: 0, transitionEnd: {position: 'static'}}} 
                            transition={{duration: props.duration, delay: props.delay}} onAnimationComplete={ () => { if(typeof props.onAnimationFinished === 'function') props.onAnimationFinished(); }}>
                {props.children}
            </MB>
        )
    }

    if(animationFinished){

        return <><MotionHeading><UnderlineHeading>Michał Zapała</UnderlineHeading>Michał Zapała</MotionHeading></>

    }else{
        return(
            <MotionBox {...props}>
                <MotionBox {...props} duration={1} ><MotionHeading {...props}>M</MotionHeading></MotionBox>
                <MotionBox {...props} duration={1.1}><MotionHeading {...props}>i</MotionHeading></MotionBox>
                <MotionBox {...props} duration={1.2}><MotionHeading {...props}>c</MotionHeading></MotionBox>
                <MotionBox {...props} duration={1.3}><MotionHeading {...props}>h</MotionHeading></MotionBox>
                <MotionBox {...props} duration={1.4}><MotionHeading {...props}>a</MotionHeading></MotionBox>
                <MotionBox {...props} duration={1.5}><MotionHeading {...props}>ł </MotionHeading></MotionBox>
                <MotionBox {...props} duration={1.6}><MotionHeading {...props}>Z</MotionHeading></MotionBox>
                <MotionBox {...props} duration={1.7}><MotionHeading {...props}>a</MotionHeading></MotionBox>
                <MotionBox {...props} duration={1.8}><MotionHeading {...props}>p</MotionHeading></MotionBox>
                <MotionBox {...props} duration={1.9}><MotionHeading {...props}>a</MotionHeading></MotionBox>
                <MotionBox {...props} duration={2}><MotionHeading {...props}>ł</MotionHeading></MotionBox>
                <MotionBox {...props} duration={2.1} onAnimationFinished={() => setAnimationFinished(true)}><MotionHeading {...props}>a</MotionHeading></MotionBox>
            </MotionBox>        
        )
    }

}

export default React.memo(DropdownName)