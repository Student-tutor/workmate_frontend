import React, { useState, useEffect } from "react";
import { GetUserProjects, ProjectCont, Title } from "../../Styled";
import emptyState from "../../assets/images/empty_state_home_activity.svg"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const UserProjects = () => {
  const [projects, setProjects] = useState([])

  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const {
    getAccessTokenSilently,
    loginWithPopup,
    getAccessTokenWithPopup,
    user 
  } = useAuth0();

  const userProjects = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log(token)
      await axios.get(
        `${serverUrl}/projects/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then(response => {
          setProjects(response.data.projects)
         console.log(response.data.projects.title)
         console.log(response.data.projects.content)
       
        })
    // const responseData = await response.json();
        // console.log(responseData)
      
    } catch (error) {
      console.log(error)
    }  
  };

useEffect(() => {
  userProjects()
}, [])

  return (
    <GetUserProjects>
      <div className="user-project-title">
        Your Projects
      </div>
      {/* <code>
          {projects && JSON.stringify(projects, null, 4)}
        </code> */}

      {projects ? projects.map(project => {
        <ProjectCont key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.type}</p>
          <p>{project.pages}</p>
          <p>{project.submissionDate}</p>
        </ProjectCont>
      }) : 
      <div className="empty-state">
        <img src={emptyState}/> 
            <p>This is where you'll see your activity and Projects </p> 
        </div>
      }
    </GetUserProjects>
  );
};

export default UserProjects;
