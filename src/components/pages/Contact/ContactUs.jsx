import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import moment from "moment";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

// import { formElements } from './FormElements'

import {
  // Background,
  // Box,
  Title,
  // Form,
  // FormOption,
  // FormControl,
  // InputField,
  // Input,
  // ContactCont,
} from "../../../Styled";
import { FaTimes } from "react-icons/fa";

const ContactUs = () => {
  const history = useHistory();

  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("Assignment/Essay");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
    };
    axios.post(`${serverUrl}/contact-us`, contactData, {}).then(() => {
      setSenderName("");
      setSenderEmail("");
      setSubject("");
      setMessage("");
      setPhoneNumber("");
    });
    history.push("/contact-us");
  };

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
                    onChange={(e) => setSubject(e.target.value)}
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
                  value={senderName}
                  name="name"
                  placeholder="Your cool name please..."
                  onChange={(e) => setSenderName(e.target.value)}
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
                  name="message"
                  value={message}
                  placeholder="What do you want us to know ..."
                  onChange={(e) => setMessage(e.target.value)}
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
                  value={senderEmail}
                  placeholder="Your email..."
                  onChange={(e) => setSenderEmail(e.target.value)}
                />
              </InputField>
            </FormControl>

            <InputField>
              <Input
                type="submit"
                name="submit"
                value="submit"
                className="btn"
              />
            </InputField>
          </Form>
        </Box>
      </Background>
    </ContactCont>
  );
};

export const ContactCont = styled.div`
  margin: 20%;

  @media (max-width: 900px) {
    margin: 5% 0;
    padding-top: 20vh;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormBackground = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8;
`;
const Box = styled.div`
  width: 100%;
  height: auto;
  padding: 2%;
  border-radius: 10px;
  background: #ffffff;
  z-index: 9;
  position: relative;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.023);

  @media (max-width: 900px) {
    width: 90%;
  }
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  margin-top: 15vh;
  @media (max-width: 900px) {
    grid-gap: 20px;
    margin-top: 8vh;
    padding: 10px;
  }
`;
const FormOption = styled.div`
  .select {
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    /* appearance: none; */
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    width: 90%;
    height: 40px;
    box-sizing: border-box;
    margin-bottom: 3vh;
    outline: none;
    border-radius: 6px;
    border: none;
  }
`;
const FormControl = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  align-items: center;
  &.btn {
    margin-top: 5vh;
    font-size: 14px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
`;
const InputField = styled.div`
  width: 100%;

  .input {
    min-width: 100%;
  }

  .select {
    border-bottom: 1px solid #616161;
    border-radius: 0;
    padding: 20px 0;
    min-width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  outline: none;
  border-radius: 6px;
  border: none;
  background: #fff;
  &.btn {
    font-size: 18px;
    &:hover {
      background-color: var(--Color-2);
    }
  }
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 5%;
  transition: all 0.5s linear;
  z-index: 999;

  &.active {
    background: var(--Color-1);
    height: 15vh;

    .toggle {
      color: #fff;
    }
  }

  a {
    color: #fff;
  }

  @media (max-width: 900px) {
    .active {
      right: 30px;
    }
  }
`;

export default ContactUs;
