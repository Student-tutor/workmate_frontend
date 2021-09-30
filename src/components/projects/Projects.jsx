import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getConfig } from "../../config";
import { Links, LinkItem } from '../../Styled';

const Projects = () => {
  // const [project, setProject] = useState("");
   const [state, setState] = useState({
    showResult: false,
    apiMessage: "",
    error: null,
  });

  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const {
    getAccessTokenSilently,
    loginWithPopup,
    getAccessTokenWithPopup,
  } = useAuth0();

  const handleConsent = async () => {
    try {
      await getAccessTokenWithPopup();
      setState({
        ...state,
        error: null,
      });
    } catch (error) {
      setState({
        ...state,
        error: error.error,
      });
    }

    await callApi();
  };



//   useEffect(() => {

//   })
   const callApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(`${serverUrl}/projects`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = await response.json();

      setState({
        ...state,
        showResult: true,
        apiMessage: responseData,
      });
    } catch (error) {
      setState({
        ...state,
        error: error.error,
      });
    }
  };

  return (
    <div className="container">
      <h1>Projects</h1>
      <div
        className="btn-group mt-5"
        role="group"
        aria-label="External API Requests Examples"
      >
        <Links>
        <LinkItem
          type="button"
          className="btn btn-primary"
          onClick={setState()}
        >
          Get all Projects
        </LinkItem>
        </Links>
      </div>
      {state && (
        <div className="mt-5">
          <h6 className="muted">Result</h6>
          <div className="container-fluid">
            <div className="row">
              <code className="col-12 text-light bg-dark p-4">{JSON.stringify(state.apiMessage, null, 2)}</code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;