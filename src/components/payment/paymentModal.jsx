import React, { useState } from "react";
import { Cp, Modal, Title } from "../../Styled";
import PaymentForm from "./paymentForm";

// mui
import TableCell from '@mui/material/TableCell';

const PaymentModal = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };

  return (
         <>
      <TableCell align="right">
           <button>Pay</button>
        </TableCell>

        <Modal className={modal ? "active" : ""}>
          
          <PaymentForm openModal={openModal} />
        </Modal>
    </>
  );
};

export default PaymentModal;
