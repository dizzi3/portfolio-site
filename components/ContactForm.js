import { Flex,  Container, Heading, Text, UnorderedList, ListItem, Box, Icon, FormControl, FormLabel, Input, Button, Textarea } from '@chakra-ui/react'
import { CgClose } from 'react-icons/cg'
import { AnimatePresence, motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const sendAnEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, '#messageForm', process.env.USER_ID)
                .then(function(response){
                    toast.success('Successfully sent Your message!')
                }, function(error){
                    toast.error('An error occurred while sending the message!')
                })
    }

    return(

        <AnimatePresence initial={false}>
            <MotionFlex maxW='100%' w={{sm: '65%', sm_md: '50%' }} h='fit-content' display={displayProp} position='absolute' left='50%' top='0'
                transform={{sm: 'translate(-50%, 5%)', md: 'translate(-50%, 10%)', lg: 'translate(-50%, 20%)'}} zIndex='99' bg='#373737' initial={displayProp === 'block' ? 'hidden' : 'visible'} color='#000'
                variants={animationVariants} animate={displayProp === 'block' ? 'visible' : 'hidden'} transition={{duration: 1}}
                boxShadow='10px 10px 30px 0px rgba(0,0,0, .3)'>

                <Flex h='100%' flexDirection={{sm: 'column', sm_md: 'row'}}>
                    <Container maxW='100%' w='100%' maxH='100%' minH='100%' bg='#ebebeb' p='2em'>

                        <MotionBox w='1.5em' h='1.5em' float='right' whileHover={{ rotate: 90 }} transition={{duration: .25}} display={{sm: 'inline', sm_md: 'none'}}><Icon as={CgClose} w='100%' h='100%'
                                    _hover={{ cursor:'pointer', color:'#8083FF'}} onClick={closeForm}/></MotionBox>

                        <Heading as='h4' fontFamily='Readex Pro' fontWeight='500' mb='.5em' fontSize={{sm: '2.2em', sm_md: '1.8em', md: '2.4em'}}>About me</Heading>
                        <Text mb='1em' fontSize={{sm: '1.2em', sm_md: '1.1em', md: '1.3em'}} fontFamily='Roboto Mono'>My name is <Box fontWeight='700' display='inline' color='#8083FF'>Michał Zapała</Box>,
                        I'm a 23-year-old developer based in <Box fontWeight='500' display='inline' color='#373737'>Kielce, Poland</Box>.</Text>

                        <Text fontFamily='DM Sans' fontSize={{sm: '1.1em', sm_md: '1.1em', md: '1.2em'}} fontWeight='500'>Technologies I'm familiar with</Text>
                        <UnorderedList fontFamily='DM Sans' fontWeight='400' fontSize={{sm: '1em', sm_md: '1em', md: '1.1em'}}>
                            <ListItem color={listBulletColor}><Text color={listItemColor}>React</Text></ListItem>
                            <ListItem color={listBulletColor}><Text color={listItemColor}>MongoDB</Text></ListItem>
                            <ListItem color={listBulletColor}><Text color={listItemColor}>MySQL</Text></ListItem>
                            <ListItem color={listBulletColor}><Text color={listItemColor}>Socket.io</Text></ListItem>
                            <ListItem color={listBulletColor}><Text color={listItemColor}>Chakra UI</Text></ListItem>
                            <ListItem color={listBulletColor}><Text color={listItemColor}>Next.js</Text></ListItem>
                            <ListItem color={listBulletColor}><Text color={listItemColor}>JavaFX</Text></ListItem>
                            <ListItem color={listBulletColor}><Text color={listItemColor}>QT</Text></ListItem>
                        </UnorderedList>

                        <Text fontFamily='DM Sans' fontSize={{sm: '1.1em', sm_md: '1.1em', md: '1.2em'}} fontWeight='500' mt='1em'>Languages</Text>
                        <UnorderedList fontFamily='DM Sans' fontWeight='400' fontSize={{sm: '1em', sm_md: '1em', md: '1.1em'}}>
                            <ListItem color={listBulletColor}><Text color={listItemColor}>Javascript</Text></ListItem>
                            <ListItem color={listBulletColor}><Text color={listItemColor}>Java</Text></ListItem>
                            <ListItem color={listBulletColor}><Text color={listItemColor}>C++</Text></ListItem>
                            <ListItem color={listBulletColor}><Text color={listItemColor}>C</Text></ListItem>
                            <ListItem color={listBulletColor}><Text color={listItemColor}>C#</Text></ListItem>
                            <ListItem color={listBulletColor}><Text color={listItemColor}>HTML</Text></ListItem>
                            <ListItem color={listBulletColor}><Text color={listItemColor}>CSS</Text></ListItem>
                        </UnorderedList>
                    </Container>

                    <Container maxW='100%' w='100%' maxH='100%' h='100%' bg='#373737' color='#f8f8f8' p='2em'>
                        <MotionBox w='1.5em' h='1.5em' float='right' whileHover={{ rotate: 90 }} transition={{duration: .25}} display={{sm: 'none', sm_md: 'inline'}}><Icon as={CgClose} w='100%' h='100%'
                                    _hover={{ cursor:'pointer', color:'#63B3ED'}} onClick={closeForm}/></MotionBox>
                        <Heading as='h4' fontFamily='Readex Pro' fontWeight='500' mb='.5em' fontSize={{sm: '2.2em', sm_md: '1.8em', md: '2.4em'}}>Contact me</Heading>

                        <form id='messageForm'>
                            <FormControl id='email' isRequired mb='.5em'>
                                <FormLabel fontFamily={labelFont} fontSize={{sm: '1em', sm_md: '.9em', md: '1em'}}>Email address</FormLabel>
                                <Input name='email' type='email' fontFamily={inputFont} fontWeight='400'/>
                            </FormControl>

                            <FormControl id='name' isRequired mb='.5em'> 
                                <FormLabel fontFamily={labelFont} fontSize={{sm: '1em', sm_md: '.9em', md: '1em'}}>Name</FormLabel>
                                <Input name='name' fontFamily={inputFont}/>
                            </FormControl>

                            <FormControl id='message' isRequired mb='.5em'>
                                <FormLabel fontFamily={labelFont} fontSize={{sm: '1em', sm_md: '.9em', md: '1em'}}>Message</FormLabel>
                                <Textarea name='message' fontFamily={inputFont} rows='10' resize='none'/>
                            </FormControl>

                            <Button colorScheme='blue' mt='1em' type='submit' fontFamily='DM Sans, sans-serif;' fontSize={{sm: '1em', sm_md: '.9em', md: '1em'}} 
                                    fontWeight='500' _focus={{}} onClick={sendAnEmail}>Send message</Button>
                        </form>
                    </Container>
                </Flex>


            </MotionFlex>

            <ToastContainer/>

        </AnimatePresence>

    )


}

export default ContactForm