import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import FlashMessage from "../../layout/FlashMessage";
// import { formElements } from './FormElements'

import {
  Background,
  Box,
  Title,
  Form,
  FormOption,
  FormControl,
  InputField,
  Input,
  ContactCont,
} from "../../../FormStyle";
import { FaTimes } from "react-icons/fa";

const ContactUs = () => {
  const history = useHistory();

  const [senderName, setSenderName] = useState("")
  const [senderEmail, setSenderEmail] = useState("")
  const [subject, setSubject] = useState("Subject")
  const [message, setMessage] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [showFlash, setShowFlash] = useState("")
  const [success, setSucces] = useState(false)
  const [loading, setLoading] = useState("")


//   const {
//     getAccessTokenSilently,
//     loginWithPopup, 
//     getAccessTokenWithPopup,
//     user,
//   } = useAuth0();
//   const { name, picture, email } = user;

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
    }).then((response) => {
      setSenderName("");
      setSenderEmail("");
      setSubject("");
      setMessage("");
      setPhoneNumber("");
      setShowFlash(response.data.message);
      setSucces(true);
    }).catch(error => {
      console.log(error)
    })    
    // history.push("/contact-us")
    setSucces(false);
  }
  
  return (
    <ContactCont>
    <Background>
      <Box>
        <Title>How can we help you ?</Title>
        <Form onSubmit={submitForm}>
          <FormControl>
            
            <InputField>
              <FormOption>
                <select
                  className="select"
                  value={subject} 
                  onChange={(e)=>setSubject(e.target.value)}
                >
                  <option> Subject </option>
                  <option> Assignment/Essay </option>
                  <option> Research project </option>
                  <option> Data Analyses </option>
                  <option> Technical/Article writing </option>
                  <option> Programming </option>
                  <option> Others </option>
                </select>
              </FormOption>
            </InputField>

            <InputField>
              <TextField
                label="Title"
                variant="filled"
                type="text"
                id="text"
                className="input"
                value={senderName}
                name='name'
                placeholder='Your cool name please...'
                onChange={(e)=>setSenderName(e.target.value)}
              />
            </InputField>
          </FormControl>

          <FormControl>
            <InputField>
              <TextField
                label="Description"
                variant="filled"
                type="text"
                id="text"
                className="input"
                name='message'
                value={message}
                placeholder = 'What do you want us to know ...'
                onChange={(e)=>setMessage(e.target.value)}
              />
            </InputField>
          </FormControl>

          <FormControl>
            <InputField>
              <TextField
                label="Tel"
                variant="filled"
                type="text"
                id="text"
                className="input"
                name="phoneNumber"
                value={phoneNumber}
                placeholder = 'WhatsApp or Telegram Number'
                onChange={(e)=>setPhoneNumber(e.target.value)}
              />
            </InputField>
            <InputField>
              <TextField
                label="Email"
                variant="filled"
                type="text"
                id="text"
                className="input"
                name="email"
                value={senderEmail}
                placeholder = 'Your email...'
                onChange={(e)=>setSenderEmail(e.target.value)}
              />
            </InputField>
          </FormControl>

          <InputField>
            <Input type="submit" name="submit" value="submit" className="btn" />
          </InputField>
        </Form>
        {
          success ? <FlashMessage message={showFlash} /> : ""
        }
      </Box>
    </Background>
    </ContactCont>
  );
};
export default ContactUs;
