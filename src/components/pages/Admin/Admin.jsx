import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import {AdminStyle, LinkItem, GetUserProjects, ProjectCont} from  '../../../Styled';
import emptyState from "../../../assets/images/empty_state_home_activity.svg"
import axios from "axios";

const Admin = () => {
  const [projects, setProjects] = useState([])
 
  const {
    getAccessTokenSilently,
    loginWithPopup,
    getAccessTokenWithPopup,
    user 
  } = useAuth0();

  const { name, picture, email } = user;
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    allProjects()
  }, [])

  const allProjects = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log(token)
      await axios.get(
        `${serverUrl}/projects`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          const data = response.data.projects;
          setProjects(data)
         console.log(data)
         console.log(typeof data)
         console.log(data.userId)
        })
      
    } catch (error) {
      console.log(error)
    }  
  };

  
  return (
    <AdminStyle>
          <p> Welcome <strong> {name}!</strong> </p>
          <div>
          <div className="btn">
            Below are the projects and other activities on this site
          </div>
          </div>
            <div className="project-header">
                    <h4>Project Title</h4>
                    <h4>Type of the Project</h4>
                    <h4>Pages</h4>
                    <h4>Date of Submission</h4>
                    <h4>Payment</h4>
            </div>
            {projects.length > 0 ? 
                            projects.map((project, i) => {                        
                    return (
                    <ProjectCont key={project._id.toString()} >
                        <p>{project.title}</p>
                        <p>{project.type}</p>
                        <p>{project.pages}</p>
                        <p>{project.submissionDate}</p>
                        <button>Click to pay</button>
                    </ProjectCont>    
                    )}                       
                ) : 
                <div className="empty-state">
                    <img src={emptyState}/> 
                    <p>This is where you'll see your activity and Projects </p> 
                </div>
                } 

    </AdminStyle>
  );
};

export default Admin