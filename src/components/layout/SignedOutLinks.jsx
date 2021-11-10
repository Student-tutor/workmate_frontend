import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";


const SignedOutLinks = ({toggle}) => {
  const { loginWithRedirect } = useAuth0();

    return (
      <Links className={toggle ? "active" : ""}>
        <LinkItem>
          <NavLink to="/about-us">About Us</NavLink>
        </LinkItem>
        
        <LinkItem>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </LinkItem>

        <LinkItem>
          <NavLink to="" 
            onClick={() => loginWithRedirect()} 
            >Sign In
          </NavLink>
        </LinkItem>

        <LinkItem>
          <NavLink to=""  className="btn" onClick={() =>
              loginWithRedirect({
                screen_hint: "signup",
              })
             } 
            >
            Join for free
          </NavLink>
        </LinkItem>
      </Links>
    );
}

const Links = styled.ul`
  @media (max-width: 900px) {
    padding: 30px;
    padding-bottom: 50px;
    position: absolute;
    top: 15vh;
    right: 0;
    display: none;
    background: var(--Color-1);
    color: #fff;
    transition: all 2s;
    border-radius: 15px;

    &.active {
      display: block;
      transition: all 0.5s cubic-bezier(0.88, 0.19, 0.37, 1.11);
      transform: scale(0);
      animation-name: showIn;
      animation-duration: 0.3s;
      animation-iteration-count: 1;
      animation-direction: normal;
      animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      animation-fill-mode: both;
      animation-delay: 0.2s;

      @keyframes showIn {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;

const LinkItem = styled.li`
  display: inline-block;
  margin-left: 40px;
  &:hover{
    color: #616161;
  }

  .btn {
    background: var(--Color-2);
    padding: 8px 17px;
    border-radius: 50px;
    color: #fff;
  }

  @media (max-width: 900px) {
a {
  color:black;
}

    display: block;
    margin: 20px 0;
    transition: all 0.5s cubic-bezier(0.88, 0.19, 0.37, 1.11);
    transform: scale(0);
    animation-name: showIn;
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: both;
    animation-delay: 0.2s;

    @keyframes showIn {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  .icon {
    font-size: 20px;
  }
`;


export default SignedOutLinks
