import React, { useState } from "react";
import { Cp, Modal, Title } from "../../Styled";
import Form from "./Form";


const Createproject = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };
  return (
    <Cp>
      <div>
        <Title className="title">What do you need to know?</Title>
        <button className="btn" onClick={openModal}>
          ASK YOUR QUESTION
        </button>

        <Modal className={modal ? "active" : ""}>
          <button className="close" onClick={openModal}>
            x
          </button>
          <Form />
        </Modal>
      </div>
    </Cp>
  );
};

export default Createproject;
