import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import moment from "moment";
import TextField from "@mui/material/TextField";
import FlashMessage from "../layout/FlashMessage"

// import { formElements } from './FormElements'

import {
  Background,
  Box,
  Title,
  ShowcaseBtn,
  SuccessBox,
} from "../../Styled";
import { FaTimes } from "react-icons/fa";

const ProjectForm = ({toggleModal, openModal}) => {
    const history = useHistory();
    
  const reloadAfterClose = () => {
    history.push("/dashboard") 
    window.open("https://wa.link/dn86e0");
    toggleModal();
    openModal();
  }
  
  return (
    <Background>
      <SuccessBox className="success">
        {/* <button className="close" onClick={() => {
            openModal()
            toggleModal()
        }} onClickCapture={reloadAfterClose}>
        <FaTimes/>
      </button> */}
      <h2>Submission is successful! </h2>
        <h3>Talk to the Team to get your quote and for speedy attention, Thank you. </h3>
        <ShowcaseBtn onClick={reloadAfterClose} className="btn">
            Chat the Team
         </ShowcaseBtn>
      </SuccessBox>
    </Background>
  );
};
export default ProjectForm;
