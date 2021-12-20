import { Box, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

function DropdownName(props){

    const [animationFinished, setAnimationFinished] = useState(false)

    let currentTransitionDuration = 1
    const delayForNextTransition = .1

    var elements = new Array()

    const MotionHeading = (props) => {
        return(
            <Heading mb={{sm: '.1em', md: 0}} fontSize={{sm: '2.5rem', md: '3.5rem'}} textUnderlineOffset='.1em' fontFamily='Ubuntu, sans-serif;'
                    fontWeight='500' letterSpacing={{sm: '.1em', md: '.15em'}} display='inline'>
                {props.children}
            </Heading>
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

    for(var i = 0; i < (props.children).length; i++){

        const heading = React.createElement(MotionHeading, props, (props.children).charAt(i));

        var box;
        if(i + 1 == (props.children).length)
            box = React.createElement(MotionBox, {delay: props.delay, duration: currentTransitionDuration, onAnimationFinished: () => setAnimationFinished(true)}, heading);
        else 
            box = React.createElement(MotionBox, {delay: props.delay, duration: currentTransitionDuration}, heading);

        elements.push(box);

        currentTransitionDuration += delayForNextTransition;
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

    if(animationFinished){

        return <><MotionHeading><UnderlineHeading>{props.children}</UnderlineHeading>{props.children}</MotionHeading></>

    }else{
        return(
            <MotionBox {...props}>
                {elements}
            </MotionBox>        
        )
    }

}

export default React.memo(DropdownName)