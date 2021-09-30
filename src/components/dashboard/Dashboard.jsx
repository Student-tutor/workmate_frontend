import React from 'react'
import { DashboardCont } from '../../Styled'
import Createproject from '../projects/Createproject'
import UserProjects from '../projects/UserProjects'
import Profile from '../pages/Profile/Profile'


const Dashboard = () => {
    return (
        <DashboardCont>
            <Createproject />
            <Profile />
            <UserProjects/>
        </DashboardCont>
    )
}

export default Dashboard
