import React, { useState } from "react";
import styled from "styled-components";
import { Links, LinkItem, ProfileImage } from '../../Styled'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const StyledUl = styled.ul`
  list-style-type: none;
  /* padding: 0; */
  /* overflow: hidden; */
`;

const StyledLi = styled.li`
  /* float: right; */
  margin-left: -20px;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  /* padding: 10px 5px; */
  /* margin-top: -20px;  */
  img {
       /* margin-top: 50px;  */
       /* overflow: hidden; */
  }
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
 
`;

const SubA = styled.a`
  color: black;
  font-size: 14px;
  padding: 8px 12px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #ebe5df;
    box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.3);
  }
`;

const Menu = () => {
    const {click, onClick } = useState()
    const { logout, user } = useAuth0();
    const { name, picture, email } = user;

    const handleClick = click => {
    if (!click) return;

    if (onClick) onClick(click);
  };

    return (
      <StyledUl>
        <DropDownLi>
          <Dropbtn onClick={() => handleClick("DropDown")}>
                <img
                src={picture}
                alt="Profile_picture"
                />
          </Dropbtn>
          <DropDownContent>
            {" "}
            <SubA>
               <NavLink to='/dashboard' >Dashboard</NavLink>
            </SubA>
            <SubA onClick={() => handleClick("Link2")}>Settings</SubA>
            <SubA>
              <NavLink to='' onClick={() => logout({ returnTo: window.location.origin })}>Sign Out</NavLink>
            </SubA>
          </DropDownContent>
        </DropDownLi>
      </StyledUl>
    );
}

export default Menu;