import React from 'react'
import { Links, LinkItem, ProfileImage } from '../../Styled'
import Menu from './Menu'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const SignedInLinks = () => {
    const { logout, user } = useAuth0();
    const { name, picture, email } = user;
        
    return (
        <Links>
            <LinkItem>
                  <NavLink to='/' >Home</NavLink>
            </LinkItem>
            <LinkItem>
                  <NavLink to='/' >Contact Us</NavLink>
            </LinkItem>
            <LinkItem>
                 <NavLink to='' onClick={() => logout({ returnTo: window.location.origin })}>Sign Out</NavLink>
            </LinkItem>
            <LinkItem>
                <Menu />
            </LinkItem>
        </Links>
    )
}

// const Links = styled.ul`

// `;
// const LinkItem = styled.li`

// `;


export default SignedInLinks
