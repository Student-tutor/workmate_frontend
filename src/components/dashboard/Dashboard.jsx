import React from 'react'
import { DashboardCont } from '../../Styled'
import Createproject from '../projects/Createproject'
import UserProjects from '../projects/UserProjects'
import Profile from '../pages/Profile/Profile'
import styled from 'styled-components'

const Dashboard = () => {
    return (
        <DashboardCont>
            <Div>
                <Createproject />
            <Profile />
            </Div>
            
            <UserProjects/>
        </DashboardCont>
    )
}

const Div = styled.div`
  display: grid;
  grid-template-columns: auto 25%;
  grid-gap: 30px;
  height: 50vh;

  @media (max-width: 900px) {
    grid-template-columns: 100%;
    height: auto;
  }
`;


export default Dashboard
