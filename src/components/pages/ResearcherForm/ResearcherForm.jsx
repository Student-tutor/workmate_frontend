import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import FlashMessage from "../../layout/FlashMessage";
// import { formElements } from './FormElements'
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'

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
import Footer from "../../layout/Footer"

const ResearcherApply = () => {
  const history = useHistory();

  const [firstName, setFirstName] = useState("")  
  const [lastName, setLastName] = useState("")  
  const [senderEmail, setSenderEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [showFlash, setShowFlash] = useState("")
  const [error, setError] = useState(false)
  const [success, setSucces] = useState(false)
  const [loading, setLoading] = useState("")
  const [qualification, setQualification] = useState("Qualification")
  const [experience, setExperience] = useState("Experience")
  const [resume, setResume] = useState("")
  const [interest, setInterest] = useState([])
  const [linkedln, setLinkedln] = useState("")
  const [value, setValue] = useState('')
  const [label, setLabel] = useState('')
  const [submitState, setSubmitState] = useState("Submit")

    const  options  = [
    { label:  'Engineering', value:  'Engineering'  },
    { label:  'Social Science', value:  'Social Science'  },
    { label:  'Management Science', value:  'Management Science'  },
    { label:  'Clinical Science', value:  'Clinical Science'  },
    { label:  'Computer Science and Programming', value:  'Computer Science and Programming'  },
    { label:  'General Science', value:  'General Science'  },
    { label:  'law, Communication and Art', value:  'law, Communication and Art'  },
    { label:  'English and Literature', value:  'English and Literature'  },
    { label:  'Technical Writing', value:  'Technical Writing'  },
  ]

  const  handleOnchange  =  e  => {
    setValue(e)  
    setInterest([e])        
  }
 
  const handleSubmitting = () => {
    if(error === false){
      setSubmitState("Submitting...")
      setError("submit");
      
    }
  }


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
      firstName,
      lastName,      
      qualification,
      experience,
      resume,
      senderEmail,
      phone,
      interest,
      linkedln,  
  
    }
    if(firstName === ""){
      setError(true);
      setSubmitState("Submit")
    }
    if(lastName === ""){
      setError(true);
      setSubmitState("Submit")
    }
    if(senderEmail === ""){
      setError(true);
      setSubmitState("Submit")
    }
    
    axios.post(`${serverUrl}/researcher`,  researcherData, {
    }).then((response) => {
      setFirstName("");
      setLastName("")
      setQualification("");
      setExperience("");
      setResume("");
      setSenderEmail("");
      setPhone("");
      setInterest("");
      setLinkedln("");
      setShowFlash(response.data.message);
      setSucces(true);
      setSubmitState("Submit")
         
        
    }).catch(error => {
      console.log(error)
    })    
    // history.push("/contact-us")
    setSucces(false);
    
  }
  console.log(interest)

  return (
    <>
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
                label="First Name"
                variant="filled"
                type="text"
                id="text"
                className="input"
                value={firstName}
                name='firstName'
                placeholder='Please Enter Your First Name...'
                onChange={(e)=>setFirstName(e.target.value)}
              />
            </InputField>

            <InputField>
              <TextField
                label="Last Name"
                variant="filled"
                type="text"
                id="text"
                className="input"
                value={lastName}
                name='lastName'
                placeholder='Please Enter Your Last Name...'
                onChange={(e)=>setLastName(e.target.value)}
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
                  <option> Diploma/NCE </option>
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


            <InputField>
              <TextField
                label="Linkedln Profile Link"
                variant="filled"
                type="text"
                id="text"
                className="input"
                name="linkedln"
                value={linkedln}
                placeholder = 'Your Linkedln Profile Link'
                onChange={(e)=>setLinkedln(e.target.value)}
              />
            </InputField>
           
          <div className="select">
          <p className="research-interest">Select your Research Areas / Interests </p>
          <MultiSelect
            onChange={handleOnchange}
            options={options}
          />
          </div>
         
          </FormControl>
                  
          <InputField>
            <Input type="submit" name="submit" value={submitState} className="btn" 
            onClick={handleSubmitting}
            />
          </InputField>
        </Form>
        {
          success ? <FlashMessage message={showFlash} /> : ""
        }
        {
          error === true ? <FlashMessage message="Please check your inputs" /> : ""
        }
       
         
      </Box>
    </Background>
    </ApplyCont>
    <Footer />
    </>
  );
};
export default ResearcherApply;
