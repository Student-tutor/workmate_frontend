import React from "react";
// import { Links, LinkItem, ProfileImage } from "../../Styled";
// import Menu from './Menu'
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// mui
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import styled from "styled-components";
//

const SignedInLinks = ({ toggle }) => {
  const { logout, user } = useAuth0();
  const { name, picture, email } = user;

  // mui
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //

  return (
    <Links className={toggle ? "active" : ""}>
      <LinkItem>
        <NavLink to="/">Home</NavLink>
      </LinkItem>
      <LinkItem>
        <NavLink to="/">Contact Us</NavLink>
      </LinkItem>
      <LinkItem>
        <NavLink
          to=""
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Sign Out
        </NavLink>
      </LinkItem>
      <LinkItem>
        {/* <Menu /> */}
        <Tooltip title="Account settings" onClick={handleClick}>
          <div className="prof_image">
            <img src={picture} alt="Profile_picture" />
          </div>
        </Tooltip>
      </LinkItem>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </MenuItem>
        <MenuItem>
          {/* <SubA onClick={() => handleClick("Link2")}>Settings</SubA> */}
        </MenuItem>
        <MenuItem>
          <NavLink
            to=""
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Sign Out
          </NavLink>
        </MenuItem>
      </Menu>
    </Links>
  );
};

const Links = styled.ul`
  @media (max-width: 900px) {
    padding: 20px;
    position: absolute;
    top: 10vh;
    right: 0;
    display: none;
    background: var(--c1);
    color: var(--c);
    transition: all 2s;

    &.active {
      display: block;
      transition: all 0.5s cubic-bezier(0.88, 0.19, 0.37, 1.11);
      transform: scale(0);
      animation-name: showIn;
      animation-duration: 0.3s;
      animation-iteration-count: 1;
      animation-direction: normal;
      animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      animation-fill-mode: both;
      animation-delay: 0.2s;

      @keyframes showIn {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;

const LinkItem = styled.li`
  display: inline-block;
  margin-left: 40px;
  @media (max-width: 900px) {
    display: block;
    margin: 20px 0;
    transition: all 0.5s cubic-bezier(0.88, 0.19, 0.37, 1.11);
    transform: scale(0);
    animation-name: showIn;
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: both;
    animation-delay: 0.2s;

    @keyframes showIn {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  .icon {
    font-size: 20px;
  }
`;

export default SignedInLinks;
