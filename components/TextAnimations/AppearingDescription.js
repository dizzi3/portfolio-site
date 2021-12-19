import { Box, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

function AppearingDescription(props){

    return(
        <MotionBox>
            <MotionBox {...props} duration={2.3}><MotionHeading {...props}>W</MotionHeading></MotionBox>
            <MotionBox {...props} duration={2.4}><MotionHeading {...props}>e</MotionHeading></MotionBox>
            <MotionBox {...props} duration={2.5}><MotionHeading {...props}>b </MotionHeading></MotionBox>
            <MotionBox {...props} duration={2.6}><MotionHeading {...props}>D</MotionHeading></MotionBox>
            <MotionBox {...props} duration={2.7}><MotionHeading {...props}>e</MotionHeading></MotionBox>
            <MotionBox {...props} duration={2.8}><MotionHeading {...props}>v</MotionHeading></MotionBox>
            <MotionBox {...props} duration={2.9}><MotionHeading {...props}>e</MotionHeading></MotionBox>
            <MotionBox {...props} duration={3}><MotionHeading {...props}>l</MotionHeading></MotionBox>
            <MotionBox {...props} duration={3.1}><MotionHeading {...props}>o</MotionHeading></MotionBox>
            <MotionBox {...props} duration={3.2}><MotionHeading {...props}>p</MotionHeading></MotionBox>
            <MotionBox {...props} duration={3.3}><MotionHeading {...props}>e</MotionHeading></MotionBox>
            <MotionBox {...props} duration={3.4}><MotionHeading {...props}>r </MotionHeading></MotionBox>
            <MotionBox {...props} duration={3.5}><MotionHeading {...props}>=</MotionHeading></MotionBox>
            <MotionBox {...props} duration={3.6}><MotionHeading {...props}>)</MotionHeading></MotionBox>
        </MotionBox>        
    )
}

function MotionHeading(props){

    return(
        <Heading as='h2' fontSize={{sm: '1.4rem', md: '2.2rem'}} fontFamily='Ubuntu, sans-serif;' fontWeight='400' display='inline'>
            {props.children}
        </Heading>
    )

}

function MotionBox(props){

    const MotionBox = motion(Box)

    return (
        <MotionBox display='inline' initial={{position: 'relative', opacity: 0, top: '-450px'}} 
                animate={{top: 0, transitionEnd: {opacity: 1, position: 'static'}}} transition={{duration: props.duration, delay: props.delay}}>
            {props.children}
        </MotionBox>
    )

}

export default React.memo(AppearingDescription)