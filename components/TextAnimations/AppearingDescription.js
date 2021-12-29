import { Box, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

function AppearingDescription(props){

    let currentTransitionDuration = 2.3
    const delayForNextTransition = .1

    var elements = new Array()

    for(let c of props.children){
        const heading = React.createElement(MotionHeading, props, c);
        const box = React.createElement(MotionBox, {delay: props.delay, duration: currentTransitionDuration}, heading);
        elements.push(box);

        currentTransitionDuration += delayForNextTransition;
    }

    return (
        <MotionBox>
            {elements}
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
        <MotionBox display='inline' initial={{opacity: 0, y: '-450px'}} 
                animate={{y: 0, transitionEnd: {opacity: 1}}} transition={{duration: props.duration, delay: props.delay}}>
            {props.children}
        </MotionBox>
    )

}

export default React.memo(AppearingDescription)