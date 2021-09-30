import React, { useState } from "react";
import { Cp, Modal, Title } from "../../Styled";
import ProjectForm from "./Form";


const Createproject = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };

  return (
    <Cp>
      <div>
        <Title className="title">What do you want to work on?</Title>
        <button className="btn" onClick={openModal}>
          MEET EXPERT
        </button>

        <Modal className={modal ? "active" : ""}>
          <button className="close" onClick={openModal}>
            X
          </button>
          <ProjectForm />
        </Modal>
      </div>
    </Cp>
  );
};

export default Createproject;
