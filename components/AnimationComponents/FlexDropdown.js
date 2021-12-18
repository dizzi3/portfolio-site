import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

function FlexDropdown(props){

    const MotionFlex = motion(Flex)

    const [animationFinished, setAnimationFinished] = useState(false)

    return(

        <MotionFlex animate={{ top: 0, transitionEnd: {position: 'static'} }} 
                    initial={{ position: animationFinished ? 'static' : 'relative', top: animationFinished ? 0 : props.distance }} 
                    transition={{ duration: props.duration }} onAnimationComplete={() => { setAnimationFinished(true) }}>
            {props.children}
        </MotionFlex>

    )

}

export default React.memo(FlexDropdown)