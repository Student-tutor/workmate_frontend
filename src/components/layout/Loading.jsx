import React from "react";
import styled from "styled-components";
import loading from "../../assets/images/loading.svg";

const Loading = () => (
  <Spinner >
    <img src={loading} alt="Loading" />
  </Spinner>
);

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Loading;
