import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import axios from "axios";

import {
  FormBackground,
  Box,
  Title,
  Form,
  FormOption,
  FormControl,
  InputField,
  Input,
} from '../../../Styled'


const ContactForm = () => {
const history = useHistory()
const {
        getAccessTokenSilently,
        user 
    } = useAuth0();

// const { name, picture, email } = user;

  const [senderName, setSenderName] = useState("")
  const [senderEmail, setSenderEmail] = useState("")
  const [subject, setSubject] = useState("Assignment/Essay")
  const [message, setMessage] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const submitForm = async (e) => {
    e.preventDefault();
    const contactData = {
      senderName,
      senderEmail,
      subject,
      message,
      phoneNumber,
    }
    axios.post(`${serverUrl}/contact-us`,  contactData, {
    })    
    history.push("/contact-us")
  }
 
    return (
        <FormBackground>
            <Box>
              <Title>How can we help you ?</Title>
                  <Form onSubmit={submitForm}>
                    <FormOption>
                    <select className="select"  value={subject} onChange={(e)=>setSubject(e.target.value)}>
                            <option> Assignment/Essay </option>
                            <option> Research project </option>
                            <option> Data Analyses </option>
                            <option> Technical/Article writing </option>
                            <option> Programming </option>
                            <option> Others </option>
                      </select>
                    </FormOption>
                     <FormControl>
                       <InputField>
                             <Input 
                               type= 'text'
                               id ='text'
                               value={senderName}
                               name='name'
                               placeholder='Your cool name please...'
                               onChange={(e)=>setSenderName(e.target.value)}
                              //  className='email'
                             />
                              </InputField>  
                          </FormControl>
                            <FormControl>
                              <InputField>
                              <Input 
                               type= 'text'
                               id ='text'
                               name='message'
                               value={message}
                               placeholder = 'What do you want us to know ...'
                               onChange={(e)=>setMessage(e.target.value)}
                              //  className='email'
                             />
                            </InputField>  
                          </FormControl>
                          <FormControl>
                              <InputField>
                              <Input 
                               type= 'number'
                               id ='text'
                               name='phoneNumber'
                               value={phoneNumber}
                               placeholder = 'WhatsApp or Telegram Number'
                               onChange={(e)=>setPhoneNumber(e.target.value)}
                              //  className='email'
                             />
                             </InputField>  
                          </FormControl>
                          <FormControl>
                              <InputField>
                              <Input 
                               type= 'text'
                               id ='text'
                               name='email'
                               value={senderEmail}
                               placeholder = 'Your email...'
                               onChange={(e)=>setSenderEmail(e.target.value)}
                              //  className='email'
                             />
                             </InputField>  
                          </FormControl>
                        <FormControl>
                            <InputField>
                              <Input 
                               type= 'submit'
                               name='submit'
                               value='submit'
                               className="btn"
                             />
                          </InputField>
                        </FormControl>
               </Form>
          </Box>
        </FormBackground>
    );
  }
  export default ContactForm