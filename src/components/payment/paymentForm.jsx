import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import TextField from "@mui/material/TextField";

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
import { FaTimes } from "react-icons/fa";

const PaymentForm = ({openModal}) => {
  const history = useHistory();

  const {
    getAccessTokenSilently,
    loginWithPopup,
    getAccessTokenWithPopup,
    user,
  } = useAuth0();
  const { name, picture, email } = user;
  const currentUser = email

  const [amount, setAmount] = useState("");
  const [full_name, setFullName] = useState(name);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userEmail, setEmail] = useState(currentUser);
  const [projectId, setProjectID] = useState("");

  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const submitForm = async (e) => {
    e.preventDefault();
    const token = await getAccessTokenSilently();
    const email = userEmail
    const paymentData = {
      amount,
      full_name,
      phoneNumber,
      email,
    };
    axios.post(`${serverUrl}/paystack/pay`, paymentData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
        const url = response.data.payment.data.authorization_url
        window.location.href = `${url}`;
        console.log(url)
    }).catch(error => console.log(error))
  };

  return (
    <Background>
      <Box>
        <button className="close" onClick={openModal}>
        <FaTimes/>
      </button>
        <Title>Payment Form</Title>
        <Form onSubmit={submitForm}>
          <FormControl>
            <InputField>
              <TextField
                label="Amount"
                variant="filled"
                type="number"
                id="text"
                className="input"
                value={amount}
                name="amount"
                placeholder="Enter Amount"
                onChange={(e) => setAmount(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputField>
          </FormControl>

          <FormControl>
            <InputField>
              <TextField
                label="Fullname"
                variant="filled"
                id="text"
                className="input"
                name="full_name"
                value={full_name}
                onChange={(e) => setFullName(e.target.value)}
              />
            </InputField>
          </FormControl>
          <InputField>
            <Input type="submit" name="submit" value="continue" className="btn" />
          </InputField>
        </Form>
      </Box>
    </Background>
  );
};
export default PaymentForm;
