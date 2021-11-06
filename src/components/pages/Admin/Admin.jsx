import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import {AdminStyle, Modal, LinkItem} from  '../../../Styled';

import SimpleDateTime  from 'react-simple-timestamp-to-date';
import emptyState from "../../../assets/images/empty_state_home_activity.svg"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import AdminForm from "../Admin/AdminForm";

// mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const Admin = () => {
  const [projects, setProjects] = useState([])
  const [modal, setModal] = useState(false);
 
  const {
    getAccessTokenSilently,
    loginWithPopup,
    getAccessTokenWithPopup,
    user 
  } = useAuth0();

  const openModal = () => {
    setModal(!modal);
  };
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
              <TableCell align="right">Submission Date</TableCell>
              <TableCell align="center">Payment</TableCell>
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
                    {/* <TableCell component="th" align="right"></TableCell> */}
                    <TableCell align="right">{project.pages}</TableCell>
                    <TableCell align="right">
                    <SimpleDateTime 
                        dateFormat="DMY" 
                        dateSeparator="/"  
                        timeSeparator=":"
                        showTime="0"
                        >
                          {project.submissionDate}
                    </SimpleDateTime>
                    </TableCell>
                  {project.isPaid == false ? 
                  <div>
                    <TableCell align="right">
                      <button className="pay-button" onClick={openModal}>Pay</button>
                    </TableCell>
                    <Modal className={modal ? "active" : ""}>
                        
                        <AdminForm openModal={openModal} />
                      </Modal>
                    </div>
                    :
                    <div>
                    <TableCell  align="right">
                       <button className="paid-button">Paid</button>
                     </TableCell>
                     </div>
                    }
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
    </AdminStyle>
  );
};

export default Admin