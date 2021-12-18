import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

function SlideBox(props){

    const MotionBox = motion(Box)

    const [animationFinished, setAnimationFinished] = useState(false)

    return(

        <MotionBox initial={{ opacity: animationFinished ? 1 : 0, position: animationFinished ? 'static' : 'absolute', 
                            transform: animationFinished ? '' : 'translate(-50%, 0%)', left: '0%' }}
                    transition={{ duration: 2 }} w='100%' minW='100%'
                    whileInView={{ opacity: 1, position: 'static', transform:'translate(0%,0%)' }}
                    onAnimationComplete={() => setAnimationFinished(true) }>
            {props.children}
        </MotionBox>

    )

}

export default React.memo(SlideBox)