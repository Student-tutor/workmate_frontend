import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import moment from 'moment'
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
} from "../../Styled";


 const ProjectForm = () => {
  const history = useHistory()
  // const [state, setState] = useState({
  //   title: "",
  //   type: "",
  //   content: "",
  //   pages: "",
  //   phoneNumber: "",
  //   email: "",
  //   submissionDate: "",
  //   // file: null,
  // })
  
  const {
    getAccessTokenSilently,
    loginWithPopup,
    getAccessTokenWithPopup,
    user 
  } = useAuth0();
  const { name, picture, email } = user;

  const [title, setTitle] = useState("")
  const [type, setType] = useState("Assignment/Essay")
  const [content, setContent] = useState("")
  const [pages, setPages] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [userEmail, setUserEmail] = useState(email)
  const [submissionDate, setSubmissionDate] = useState(moment().locale('en').format('YYYY-MM-DD'))
  const [file, setFile] = useState("")

  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const submitForm = async (e) => {
    e.preventDefault();
    const token = await getAccessTokenSilently();
    const projectData = {
      title,
      type,
      content,
      pages,
      phoneNumber,
      userEmail,
      submissionDate,
      file,
    }
    axios.post(`${serverUrl}/projects`,  projectData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })    
    history.push("/dashboard")
  }
 
    return (
        <Background>
            <Box>
              <Title>Work Details</Title>
                  <Form onSubmit={submitForm}>
                    <FormOption>
                    <select className="select"  value={type} onChange={(e)=>setType(e.target.value)}>
                            <option> Assignment/Essay </option>
                            <option> Research project </option>
                            <option> Data Analyses </option>
                            <option> Technical/Article writing </option>
                            <option> Programming </option>
                      </select>
                    </FormOption>
                     <FormControl>
                       <InputField>
                             <Input 
                               type= 'text'
                               id ='text'
                               value={title}
                               name='title'
                               placeholder='e.g Discus the effect of Covid-19 ....'
                               onChange={(e)=>setTitle(e.target.value)}
                              //  className='email'
                             />
                              </InputField>  
                          </FormControl>
                            <FormControl>
                              <InputField>
                              <Input 
                               type= 'text'
                               id ='text'
                               name='content'
                               value={content}
                               placeholder = 'Please elaborate on the above ...'
                               onChange={(e)=>setContent(e.target.value)}
                              //  className='email'
                             />
                            </InputField>  
                          </FormControl>
                          <FormControl>
                              <InputField>
                              <Input 
                               type= 'number'
                               id ='text'
                               name='pages'
                               value={pages}
                               placeholder = 'Please enter the number of pages if required'
                               onChange={(e)=>setPages(e.target.value)}
                             />
                             </InputField>  
                          </FormControl>
                          <FormControl>
                              <InputField>
                              <Input 
                               type= 'text'
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
                               value={userEmail}
                               placeholder = 'Your preferred email...'
                               onChange={(e)=>setUserEmail(e.target.value)}
                              //  className='email'
                             />
                             </InputField>  
                          </FormControl>
                          <FormControl>
                            <InputField>
                              <Input 
                               type= 'date'
                               id ='text'
                               name='submissionDate'
                               value={submissionDate}
                               onChange={(e)=>setSubmissionDate(e.target.value)}
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
        </Background>
    );
  }
  export default ProjectForm