import { FormControl, FormLabel, Input, Button, Textarea, FormErrorMessage } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';

const Form = (props) => {

    const labelFont = 'Readex Pro'
    const inputFont = 'Delius';

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()

    const onSubmit = async data => {
        props.onSubmit(data)
    }
    
    return(
        
        <form onSubmit={handleSubmit(onSubmit)} id='messageForm' noValidate >
                <FormControl id='email' mb='.5em' isInvalid={errors.email} isRequired>
                    <FormLabel fontFamily={labelFont} fontSize={{sm: '1em', sm_md: '.9em', md: '1em'}} htmlFor='email'>Email address</FormLabel>
                    <Input name='email' id='email' fontFamily={inputFont} fontWeight='400'
                            {...register('email',{
                                required: 'Email is required',
                                pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Entered value does not match email format'
                                }
                            })}/>
                    
                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>

                </FormControl>

                <FormControl id='name' mb='.5em' isInvalid={errors.name} isRequired> 
                    <FormLabel fontFamily={labelFont} fontSize={{sm: '1em', sm_md: '.9em', md: '1em'}}>Name</FormLabel>
                    <Input name='name' id='name' fontFamily={inputFont}
                        {...register('name', {
                            required: 'Name is required'
                        })}      
                    />
                    
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>

                </FormControl>

                <FormControl id='message' mb='.5em' isInvalid={errors.message} isRequired>
                    <FormLabel fontFamily={labelFont} fontSize={{sm: '1em', sm_md: '.9em', md: '1em'}}>Message</FormLabel>
                    <Textarea name='message' id='message' fontFamily={inputFont} rows='10' resize='none'
                        {...register('message', {
                            required: 'Message is required'
                        })}  
                    />

                    <FormErrorMessage>
                        {errors.message && errors.message.message}
                    </FormErrorMessage>

                </FormControl>

                <Button colorScheme='blue' mt='1em' type='submit' fontFamily='DM Sans, sans-serif;' fontSize={{sm: '1em', sm_md: '.9em', md: '1em'}} 
                        fontWeight='500' _focus={{}} type='submit'>Send message</Button>
            </form>

    )
}

export default Form