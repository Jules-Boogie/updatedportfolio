import React from 'react'
import { Modal, Button } from 'react-bootstrap'


function PDFmodal(props) {

    const style ={
        height:"800px",
        width:"1000px"
        
    }

    const pdfStyle={
        height:"700px",
        width:"750px"
    }
    return (
      <Modal
      
        {...props}
        size="lg"
        dialogClassName="modal-100w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Juliet's Resume
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={style}>
        <iframe style={pdfStyle} src="https://docs.google.com/document/d/e/2PACX-1vTfiiLAWy92hmSIu1vcd1EOaIM2W2UnH2aNzP5K_NRxAEzFTk1koC9GlvQMyCX5m4vsFf1cSY_VwDvu/pub?embedded=true"></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default PDFmodal;