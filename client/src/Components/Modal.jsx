import React from 'react';
// import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap'
import styled from 'styled-components';

function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      className='width_modal'
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton >
        <Modal.Title className="ms-auto" id="contained-modal-title-vcenter">
       <h5> Privacy Policy </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h3>
      Notes on data protection, data processing and voluntariness </h3>
        <p>
        Participation in this survey is anonymous and voluntary. You can stop the survey at any time
        
        if you do not feel comfortable taking it. The data you enter will be used to evaluate employee
        
        satisfaction at <b> Intelizign Engineering Services GmbH.</b>  </p>
        
        <p>
        At the end you have the possibility to leave your contact data for questions and suggestions.
        
        Only the involved persons from the HR department have access to the voluntarily given data. </p>
        <p>
        Raw data will be kept as long as needed for the research purpose and related activities. There are no plans
        
        to share them, and otherwise they will only be shared in a state that does not allow conclusions to be drawn
        
        about individual persons (data anonymization/data aggregation). 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Done</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default MyVerticallyCenteredModal;
const Button = styled.button`
border: none;
width: 5rem;
height: 2.5rem;
background: blue;
color: #fff;
border-radius: .5rem;
`
const H5 = styled.h5`
text-align: center !important;
`