import React from "react";
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import {ProfileStyle, LinkItem} from  '../../../Styled';
import avatar from '../../../assets/images/avatar.jpg'

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  
  return (
    <ProfileStyle>
      <img
            src={picture ? picture : avatar}
            alt="Profile"
          />
          <p>{name}</p>
          <LinkItem>
          <NavLink to=""  className="btn">
            Ask your Question
          </NavLink>
          </LinkItem>
    </ProfileStyle>
  );
};

export default Profile