import React, { useState, useEffect } from "react";
import {
  GetUserProjects,
  // ProjectCont,
  // Title
} from "../../Styled";
import emptyState from "../../assets/images/empty_state_home_activity.svg"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";


// mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

//

// const style = { 
//   width: "14rem"
// };

// const search = {
//    height: "60px" 
// }


// mui

//


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
      
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          className="table"
        >
          <TableHead className="table_head">
            <TableRow className="table_head_row">
              <TableCell >
                Title
              </TableCell>
              <TableCell align="right">
                Type
              </TableCell>
              <TableCell align="right">Pages</TableCell>
              <TableCell align="right">Submission</TableCell>
              <TableCell align="right">Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody classNmae="table_body">
            {projects.length > 0 ? (
              projects.map((project, i) => {
                return (
                  <TableRow key={project._id.toString()} className="table_row">
                    <TableCell component="th" scope="row">
                      {project.title}
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                      {project.type}
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">{project.pages}</TableCell>
                    <TableCell align="right">
                      {project.submissionDate}
                    </TableCell>
                    <TableCell align="right">
                      <button>Pay</button>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <div className="empty-state">
                <img src={emptyState} />
                <p>This is where you'll see your activity and Projects </p>
              </div>
              
            )}
          </TableBody>
        </Table>
     
    </GetUserProjects>
  );
};

export default UserProjects;
