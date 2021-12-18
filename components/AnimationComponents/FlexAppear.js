import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'

function FlexAppear(props){

    const MotionFlex = motion(Flex)
    
    const [animationFinished, setAnimationFinished] = useState(false)

    return(

        <MotionFlex animate={{ opacity: 1 }} initial={{ opacity: animationFinished ? 1 : 0 }} transition={{ duration: props.duration }}
                    onAnimationComplete={() => { setAnimationFinished(true) }}>
            {props.children}
        </MotionFlex>

    )

}

export default React.memo(FlexAppear)