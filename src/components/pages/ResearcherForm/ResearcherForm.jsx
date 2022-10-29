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
  ApplyCont,
} from "../../../FormStyle";
import { FaTimes } from "react-icons/fa";

const ResearcherApply = () => {
  const history = useHistory();

  const [fullName, setFullName] = useState("")  
  const [senderEmail, setSenderEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
   const [showFlash, setShowFlash] = useState("")
  const [success, setSucces] = useState(false)
  const [loading, setLoading] = useState("")
  const [qualification, setQualification] = useState("Qualification")
  const [experience, setExperience] = useState("Experience")
  const [resume, setResume] = useState("")
 

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
    const researcherData = {
      fullName,
      qualification,
      experience,
      resume,
      senderEmail,
      phone,  
  
    }
    axios.post(`${serverUrl}/researcher`,  researcherData, {
    }).then((response) => {
      setFullName("");
      setQualification("");
      setExperience("");
      setResume("");
      setSenderEmail("");
      setPhone("");
      setShowFlash(response.data.message);
      setSucces(true);
    }).catch(error => {
      console.log(error)
    })    
    // history.push("/contact-us")
    setSucces(false);
  }
  
  return (
    <ApplyCont>
    <Background>
      <Box>
        <Title>Are you a researcher? Apply here!</Title>
        <p>Fill the form below if you are a researcher, writer or data analyst </p>
        <p>You can as well fill the form if you are interested in becoming one.</p>
        <Form onSubmit={submitForm}>
          <FormControl>
          <InputField>
              <TextField
                label="Full Name"
                variant="filled"
                type="text"
                id="text"
                className="input"
                value={fullName}
                name='fullName'
                placeholder='Please Enter Your Name...'
                onChange={(e)=>setFullName(e.target.value)}
              />
            </InputField>

            <InputField>
              <TextField
                label="Email"
                variant="filled"
                type="text"
                id="text"
                className="input"
                name="senderEmail"
                value={senderEmail}
                placeholder = 'Your email...'
                onChange={(e)=>setSenderEmail(e.target.value)}
              />
            </InputField>

            <InputField>
              <TextField
                label="Phone Number"
                variant="filled"
                type="text"
                id="text"
                className="input"
                name="phone"
                value={phone}
                placeholder = 'WhatsApp or Telegram Number Including Country Code'
                onChange={(e)=>setPhone(e.target.value)}
              />
            </InputField>

            <InputField>
              <FormOption>
                <select
                  className="select"
                  value={qualification} 
                  onChange={(e)=>setQualification(e.target.value)}
                >
                  <option> Qualification </option>
                  <option> Secondary </option>
                  <option> Diploma </option>
                  <option> College Degree </option>
                  <option> Masters </option>
                  <option> PhD </option>                  
                </select>
              </FormOption>
            </InputField>

            <InputField>
              <TextField
                label="Link to Resume"
                variant="filled"
                type="text"
                id="text"
                className="input"
                name="resume"
                value={resume}
                placeholder = 'Upload your resume online such as Google Drive and paste the Link'
                onChange={(e)=>setResume(e.target.value)}
              />
            </InputField>


            <InputField>
              <FormOption>
                <select
                  className="select"
                  value={experience} 
                  onChange={(e)=>setExperience(e.target.value)}
                >
                  <option> Experience </option>
                  <option> Entry Level </option>
                  <option> Intermediate</option>
                  <option> Advanced</option>
                  
                </select>
              </FormOption>
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
    </ApplyCont>
  );
};
export default ResearcherApply;
