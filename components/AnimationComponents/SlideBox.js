import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

function SlideBox(props){

    const MotionBox = motion(Box)

    const [animationFinished, setAnimationFinished] = useState(false)

    return(

        <MotionBox initial={{ opacity: animationFinished ? 1 : 0, x: animationFinished ? 0 : '-350px' }} 
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }} w='100%' minW='100%'
                    onAnimationComplete={() => setAnimationFinished(true) }>
            {props.children}
        </MotionBox>

    )

}

export default React.memo(SlideBox)