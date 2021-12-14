import { Flex,  Container, Heading, Text, UnorderedList, ListItem, Box, Icon, FormControl, FormLabel, Input, Button, Textarea } from '@chakra-ui/react'
import { CgClose } from 'react-icons/cg'
import { motion } from 'framer-motion'

function ContactForm({displayProp, setDisplayState}){

    const listBulletColor = '#00C6CF'
    const listItemColor = '#000'

    const labelFont = 'Readex Pro'
    const inputFont = 'Delius';

    const MotionFlex = motion(Flex)
    const MotionBox = motion(Box)

    const animationVariants = {
        visible: { 
            opacity: 1,
            left: '50%',
            display: 'block'
        },

        hidden: { 
            opacity: 0,
            left: '0%',
            transitionEnd: {
                display: 'none'
            }
        },
    }

    function closeForm(){
        setDisplayState('none')
    }

    return(

        <MotionFlex maxW='50%' w='50%' maxH='80%' h='80%' display={'block'} position='fixed' left='50%' top='50%'
            transform='translate(-50%, -50%)' zIndex='99' initial={displayProp === 'block' ? 'hidden' : 'visible'} color='#000' borderRadius='25px'
            variants={animationVariants} animate={displayProp === 'block' ? 'visible' : 'hidden'} transition={{duration: 1}}>

            <Flex h='100%'>
                <Container maxW='50%' w='50%' maxH='100%' minH='100%' bg='#ebebeb' p='2em'>

                    <Heading as='h4' fontFamily='Readex Pro' fontWeight='500' mb='.5em' fontSize='2.4em'>About me</Heading>
                    <Text mb='1em' fontSize='1.3em' fontFamily='Roboto Mono'>My name is <Box fontWeight='700' display='inline' color='#8083FF'>Michał Zapała</Box>,
                    I'm a 23-year-old developer based in <Box fontWeight='500' display='inline' color='#373737'>Kielce, Poland</Box>.</Text>

                    <Text fontFamily='DM Sans' fontSize='1.2em' fontWeight='500'>Technologies I'm familiar with</Text>
                    <UnorderedList fontFamily='DM Sans' fontWeight='400' fontSize='1.1em'>
                        <ListItem color={listBulletColor}><Text color={listItemColor}>React</Text></ListItem>
                        <ListItem color={listBulletColor}><Text color={listItemColor}>MongoDB</Text></ListItem>
                        <ListItem color={listBulletColor}><Text color={listItemColor}>MySQL</Text></ListItem>
                        <ListItem color={listBulletColor}><Text color={listItemColor}>Socket.io</Text></ListItem>
                        <ListItem color={listBulletColor}><Text color={listItemColor}>Chakra UI</Text></ListItem>
                        <ListItem color={listBulletColor}><Text color={listItemColor}>Next.js</Text></ListItem>
                        <ListItem color={listBulletColor}><Text color={listItemColor}>JavaFX</Text></ListItem>
                        <ListItem color={listBulletColor}><Text color={listItemColor}>QT</Text></ListItem>
                    </UnorderedList>

                    <Text fontFamily='DM Sans' fontSize='1.2em' fontWeight='500' mt='1em'>Languages</Text>
                    <UnorderedList fontFamily='DM Sans' fontWeight='400' fontSize='1.1em'>
                        <ListItem color={listBulletColor}><Text color={listItemColor}>Javascript</Text></ListItem>
                        <ListItem color={listBulletColor}><Text color={listItemColor}>Java</Text></ListItem>
                        <ListItem color={listBulletColor}><Text color={listItemColor}>C++</Text></ListItem>
                        <ListItem color={listBulletColor}><Text color={listItemColor}>C</Text></ListItem>
                        <ListItem color={listBulletColor}><Text color={listItemColor}>C#</Text></ListItem>
                        <ListItem color={listBulletColor}><Text color={listItemColor}>HTML</Text></ListItem>
                        <ListItem color={listBulletColor}><Text color={listItemColor}>CSS</Text></ListItem>
                    </UnorderedList>
                </Container>

                <Container maxW='50%' w='50%' maxH='100%' h='100%' bg='#373737' color='#f8f8f8' p='2em'>
                    <MotionBox w='1.5em' h='1.5em' float='right' whileHover={{ rotate: 90 }} transition={{duration: .25}}><Icon as={CgClose} w='100%' h='100%'
                                _hover={{ cursor:'pointer', color:'#91cef1'}} onClick={closeForm}/></MotionBox>
                    <Heading as='h4' fontFamily='Readex Pro' fontWeight='500' mb='.5em' fontSize='2.4em'>Contact me</Heading>

                    <FormControl id='email' isRequired mb='.5em'>
                        <FormLabel fontFamily={labelFont}>Email address</FormLabel>
                        <Input type='email' fontFamily={inputFont} fontWeight='400'/>
                    </FormControl>

                    <FormControl id='name' isRequired mb='.5em'> 
                        <FormLabel fontFamily={labelFont}>Name</FormLabel>
                        <Input fontFamily={inputFont}/>
                    </FormControl>

                    <FormControl id='message' isRequired mb='.5em'>
                        <FormLabel fontFamily={labelFont}>Message</FormLabel>
                        <Textarea fontFamily={inputFont} rows='10' resize='none'/>
                    </FormControl>

                    <Button colorScheme='blue' mt='1em' type='submit' fontFamily='DM Sans, sans-serif;' fontSize='1em' fontWeight='500' _focus={{}}>Send message</Button>

                </Container>
            </Flex>

        </MotionFlex>

    )


}

export default ContactForm