import React, { useState, useEffect } from "react";
import { GetUserProjects, ProjectCont, Title } from "../../Styled";
import emptyState from "../../assets/images/empty_state_home_activity.svg"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const style = { 
  width: "14rem"
};

const search = {
   height: "60px" 
}

const UserProjects = () => {
  const [projects, setProjects] = useState([])

  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const {
    getAccessTokenSilently,
    loginWithPopup,
    getAccessTokenWithPopup,
    user 
  } = useAuth0();

  useEffect(() => {
    userProjects()
  }, [])

  const userProjects = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log(token)
      await axios.get(
        `${serverUrl}/projects/user`,
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

    <GetUserProjects>
      <div className="user-project-title">
        Your Projects
      </div>
      <div className="project-header">
              <p>Project Title</p>
              <p>Type of the Project</p>
              <p>Pages</p>
              <p>Date of Submission</p>
              <p>Payment</p>
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

    </GetUserProjects>
  );
};

export default UserProjects;
