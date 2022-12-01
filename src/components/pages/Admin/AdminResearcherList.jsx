import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import {AdminStyle, Modal, LinkItem} from  '../../../Styled';

import SimpleDateTime  from 'react-simple-timestamp-to-date';
import emptyState from "../../../assets/images/empty_state_home_activity.svg"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import AdminForm from "./AdminForm";

// mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const Researchers = () => {
  const [researchers, setResearchers] = useState([])
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
    allResearchers()
  }, [])

  const allResearchers = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log(token)
      await axios.get(
        `${serverUrl}/researcher`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          const data = response.data.researchers;
          setResearchers(data)
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
      < NavLink to="/admin">
          <p>Go to Projects --> </p>
        </NavLink>
          <p> Welcome <strong> {name}!</strong> </p>
          <div>
          <div className="btn">
            Below are the researchers on this site
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
                Email
              </TableCell>
              <TableCell align="right">
                First Name
              </TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Qualification</TableCell>
              <TableCell align="center">Resume</TableCell>
              <TableCell align="center">Experience</TableCell>
              <TableCell align="center">Linkedln</TableCell>
              <TableCell align="center">Interests</TableCell>
            </TableRow>
          </TableHead>
          <TableBody classNmae="table_body">
            {researchers.length > 0 ? (
              researchers.map((researcher, i) => {
                return (
                  <TableRow key={researcher._id.toString()} className="table_row">
                    <TableCell component="th" scope="row">
                      {researcher.senderEmail}
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                      {researcher.firstName}
                    </TableCell>
                    {/* <TableCell component="th" align="right"></TableCell> */}
                    <TableCell align="right">{researcher.phone}</TableCell>
                    <TableCell align="right">
                      {researcher.qualification}
                    </TableCell>
               
                    <TableCell align="right">
                     {researcher.resume}
                    </TableCell>
                     <TableCell align="right">
                     {researcher.experience}
                    </TableCell>
                    <TableCell align="right">
                     {researcher.linkedln}
                    </TableCell>
                     <TableCell align="right">
                     {researcher.interest}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <div className="empty-state">
                <img src={emptyState} />
                <p>This is where you'll see all Researchers on this site </p>
              </div>
              
            )}
          </TableBody>
        </Table>
    </AdminStyle>
  );
};

export default Researchers