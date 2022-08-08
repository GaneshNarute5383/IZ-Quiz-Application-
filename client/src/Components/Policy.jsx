import React, { useState } from 'react'
import MyVerticallyCenteredModal from "./Modal"

const Policy = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
      <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)} />
    

  );
  }


export default Policy;