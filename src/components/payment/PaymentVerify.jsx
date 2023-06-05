import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import Loading from "../../components/layout/Loading"
import axios from "axios";

const PaymentVerify = (props) => {
  const [payments, setPayments] = useState([])
  const history = useHistory();
  
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const {
    getAccessTokenSilently,
    user 
  } = useAuth0();


  useEffect(() => {
    userPayment()
  }, [])

  const userPayment = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log(token)
      await axios.get(
        `${serverUrl}/paystack/callback${window.location.search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })  
        history.push("/dashboard");
    } catch (error) {
      console.log(error)
    }  
  };

  return (
   <>
    <Loading />
   </>
  );
};

export default PaymentVerify;
