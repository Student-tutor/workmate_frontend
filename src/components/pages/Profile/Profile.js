import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import {ProfileStyle, Modal} from  '../../../Styled';

import avatar from '../../../assets/images/avatar.jpg'
import ProjectForm from "../../projects/Form";

const Profile = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };

  const { user } = useAuth0();
  const { name, picture, email } = user;
  
  return (
    <ProfileStyle>
      <div>
      <img
            src={picture ? picture : avatar}
            alt="Profile"
          />
          <p>{name}</p>
          
            <button className="cta" onClick={openModal}>
            Your Question
            </button>

            <Modal className={modal ? "active" : ""}>
              
               <ProjectForm openModal={openModal} />
              </Modal>
          </div>
    </ProfileStyle>
  );
};

export default Profile
        
          
         
          