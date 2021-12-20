import { Box, Flex, Link, VStack, Icon, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { CgClose } from 'react-icons/cg'

function Sidebar(props){

    const MotionBox = motion(Box)
    const MotionFlex = motion(Flex)

    const transitionVariants = {

        open: {
            clipPath: `circle(1000px at 40px 40px)`,
            transition: {
                type: 'spring',
                stiffness: 20,
                restDelta: 2,
            }
        },

        close: {

            clipPath: `circle(50px at 40px 40px)`,
            transition: {
                delay: .5,
                type: 'spring',
                stiffness: 400,
                damping: 40
            }

        }

    }

    return (

        <MotionFlex maxW='50%' w='50%' minH='20%' bg={useColorModeValue('#202023', '#f4f4f4')} position='absolute' zIndex='99' 
            color={useColorModeValue('#f4f4f4', '#202023')} display={props.display} justifyContent='center'
            fontFamily='Ubuntu' fontSize='1.5em' borderRadius={10} p={6}
            initial={'close'} animate={props.display === 'flex' ? 'open' : 'close'} variants={transitionVariants}>
                
                <MotionBox w='1.2em' h='1.2em' right='.3em' top='.5em' whileHover={{ rotate: 90 }} transition={{duration: .25}} position='absolute'>
                    <Icon as={CgClose} w='100%' h='100%' _hover={{ cursor:'pointer', color:'#63B3ED'}} onClick={() => props.setDisplay('none')}/>
                </MotionBox>

                <VStack>
                    <a href='/'><Link py={3}>Home</Link></a>
                    <a href='#projects'><Link py={3}>Works</Link></a>
                    <Link onClick={() => { props.setContactFormDisplay('block') }}>Contact</Link>
                </VStack>

        </MotionFlex>

    )

}

export default Sidebar