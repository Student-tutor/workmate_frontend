import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import logo from '../../assets/images/logo.png'
// import { Toggle, Nav, Logo, AfterSignIn } from '../../Styled';
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { CgClose, CgMenuMotion } from "react-icons/cg";

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);
    const [navbar, setNavbar] = useState(false)

    const { isAuthenticated } = useAuth0();

    const links = isAuthenticated ? 
    <AfterSignIn>
      <SignedInLinks toggle={toggle} />
      </AfterSignIn>  : 
    <SignedOutLinks toggle={toggle} />;

    // const changeBackground = () => {
    //     if(window.scrollY >= 80) {
    //         setNavbar(true);
    //     } else {
    //         setNavbar(false)
    //     }
    // }

  // window.addEventListener("scroll", changeBackground)
  
  const handleClick = () => {
    setToggle(!toggle);
  };

    return (
      <Nav className={navbar ? "active" : ""}>
        <Link to="/" className='logo'>
          <Logo src={logo} /> 
          <h3> <span className='work-mate'>Workmate</span></h3>
        </Link>
        {links}
        <Toggle onClick={handleClick} className="toggle">
          {toggle ? <CgClose /> : <CgMenuMotion />}
        </Toggle>
      </Nav>
    );
}


const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 1% 6%;
  /* overflow: hidden; */
  background: var(--Color-5);
  transition: all .5s;
  z-index: 999;

  @media (max-width: 900px) {
    height: 9vh;
    z-index: 999;
  }

  .logo {
    display: flex;
    /* justify-content: space-between;
    align-items: center; */
    h3{
      margin-top: 25px;
    }
  }

  a {
    color: white;
    text-decoration: none;
  }

  &.active {
    background: var(--Color-1);

    a {
      color: #fff;
    }
  }
`;

const Logo = styled.img`
width: 50px;
margin-right: 10px;
h3{
    margin-top: 1.625rem;
  }
`;

const Toggle = styled.div`
  display: none;
  font-size: 30px;
  transition: all 2s;

  @media (max-width: 900px) {
    display: block;
    transition: all 2s;    
  }
`;

const AfterSignIn = styled.div`
  a {
    text-decoration: none;
    position: relative;
    color: var(--c);
  }

  &.btn {
    background-color: var(--Color-2);
    border-radius: 50px;
    padding: 8px 25px;
    cursor: pointer;
  }
`;


export default Navbar
