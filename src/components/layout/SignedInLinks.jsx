import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <Links>
            <LinkItem>
            <NavLink to='/' >Home</NavLink>
            </LinkItem>
            <LinkItem>
            <NavLink to='/' >Dashboard</NavLink>
            </LinkItem>
            <LinkItem>
            <NavLink to='/' >Mentors</NavLink>
            </LinkItem>
            <LinkItem>
            <NavLink to='/' >Link</NavLink>
            </LinkItem>
        </Links>
    )
}

const Links = styled.ul`

`;
const LinkItem = styled.li`

`;


export default SignedInLinks
