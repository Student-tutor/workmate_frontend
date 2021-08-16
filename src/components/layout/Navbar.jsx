import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
// import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import logo from '../../assets/images/logo.png'
import { Toggle, Nav, Logo } from '../../Styled';



const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

  window.addEventListener("scroll", changeBackground)
  
  const handleClick = () => {
    setToggle(!toggle);
  };

    return (
      <Nav className={navbar ? "active" : ""}>
        <Link to="/">
          <Logo src={logo} />
        </Link>

        <Toggle onClick={handleClick} className='toggle'>
          {toggle ? <FaTimes /> : <FaBars />}
        </Toggle>

        <SignedOutLinks toggle={toggle} />
      </Nav>
    );
}



export default Navbar
