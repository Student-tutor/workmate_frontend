import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import moment from "moment";
import TextField from "@mui/material/TextField";
import FlashMessage from "../layout/FlashMessage";
import SuccessModal from "./successPage";

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
  Modal,
} from "../../Styled";
import { FaTimes } from "react-icons/fa";

const ProjectForm = ({openModal, setModal}) => {
  const history = useHistory();
  const [successModal, setSuccessModal] = useState(false);
  const [projects, setProjects] = useState([])

  const toggleModal = () => {
    setSuccessModal(!successModal);
  };

  const handleSuccess = () => {
    setSucces(true)
  }

  const {
    getAccessTokenSilently,
    loginWithPopup,
    getAccessTokenWithPopup,
    user,
  } = useAuth0();
  const { name, picture, email } = user;

  const [title, setTitle] = useState("");
  const [type, setType] = useState("Assignment/Essay");
  const [content, setContent] = useState("");
  const [pages, setPages] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userEmail, setUserEmail] = useState(email);
  const [submissionDate, setSubmissionDate] = useState(
    moment().locale("en").format("YYYY-MM-DD")
  );
  const [file, setFile] = useState("");
  const [showFlash, setShowFlash] = useState("")
  const [success, setSucces] = useState(false)

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
    };
    axios.post(`${serverUrl}/projects`, projectData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setTitle("");
      setType("");
      setContent("");
      setPages("");
      setPhoneNumber("");
      setUserEmail("");
      setSubmissionDate("");
      setShowFlash(response.data.message);
      setSucces(true);
    }).catch(err => console.log(err))  
    setSucces(false);
  };

  const reloadAfterClose = () => {
    history.push("/dashboard") 
  }

  useEffect(() => {
    if(success === true){
      setSuccessModal(true);
      // openModal();
      // setModal(false)
    }
  }, [success])

  useEffect(() => {
    if(success === true){
      userProjects()
    }
  }, [success])

  const userProjects = async () => {
    try {
      const token = await getAccessTokenSilently();
      await axios.get(
        `${serverUrl}/projects/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          const data = response.data.projects;
          setProjects(data)
         console.log(response.data.projects)
        })
    } catch (error) {
      console.log(error)
    }  
  };
  
  return (
    <Background>
      <Box>
        <button className="close" onClick={openModal} onClickCapture={reloadAfterClose }>
        <FaTimes/>
      </button>
        <Title>Work Details</Title>
        <Form onSubmit={submitForm}>
          <FormControl>
            <InputField>
              <FormOption>
                <select
                  className="select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
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
                value={title}
                name="title"
                placeholder="e.g Discus the effect of Covid-19 ...."
                onChange={(e) => setTitle(e.target.value)}
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
                name="content"
                value={content}
                placeholder="Please elaborate on the above ..."
                onChange={(e) => setContent(e.target.value)}
              />
            </InputField>
            <InputField>
              <TextField
                label="Pages"
                variant="filled"
                type="number"
                id="text"
                className="input"
                name="pages"
                value={pages}
                placeholder="Please enter the number of pages if required"
                onChange={(e) => setPages(e.target.value)}
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
                placeholder="WhatsApp or Telegram Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                value={userEmail}
                placeholder="Your preferred email..."
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </InputField>
          </FormControl>

          <FormControl>
            <InputField>
              <TextField
                label="Submission Date"
                variant="filled"
                type="date"
                id="text"
                className="input"
                name="submissionDate"
                value={submissionDate}
                onChange={(e) => setSubmissionDate(e.target.value)}
              />
            </InputField>
          </FormControl>
          <InputField>
            <Input type="submit" name="submit" value="submit" className="btn" />
          </InputField>
        </Form>
        {/* {
          success ? <FlashMessage message={showFlash} /> : ""
        } */}
      </Box>
      <Modal className={successModal ? "active" : ""}>
          <SuccessModal toggleModal={toggleModal} openModal={openModal} />
      </Modal>
    </Background>
  );
};
export default ProjectForm;
