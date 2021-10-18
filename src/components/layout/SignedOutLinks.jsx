import React from 'react';
import { NavLink } from 'react-router-dom';
import { Links, LinkItem } from '../../Styled';
import { useAuth0 } from "@auth0/auth0-react";


const SignedOutLinks = ({toggle}) => {
  const { loginWithRedirect } = useAuth0();

    return (
      <Links className={toggle ? "active" : ""}>
        <LinkItem>
          <NavLink to="/mentors">For Parents</NavLink>
        </LinkItem>
        
        <LinkItem>
          <NavLink to="/">For Students</NavLink>
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


export default SignedOutLinks
