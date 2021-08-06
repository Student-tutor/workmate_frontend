import React from 'react'
import { NavLink } from 'react-router-dom'
import { Links, LinkItem } from '../../Styled'


const SignedOutLinks = ({toggle}) => {
    return (
      <Links className={toggle ? "active" : ""}>
        <LinkItem>
          <NavLink to="/mentors">For Parents</NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink to="/">For Students</NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink to="/sign-in" className="btn">
            Join for free
          </NavLink>
        </LinkItem>
      </Links>
    );
}




export default SignedOutLinks
