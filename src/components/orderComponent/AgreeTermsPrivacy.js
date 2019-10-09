import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

const AgreeTermsPrivacy= ({
      field: { name, value, onChange, onBlur },
      form: { errors, touched, setFieldValue },
      id,
      label,
      className,
      ...props})  => {
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      return (
        <>
            <div  className="custom-control custom-checkbox">
                  <input
                        name={name}
                        id={id}
                        type="checkbox"
                        value={value}
                        checked={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        className="custom-control-input" 
                  />
                  <label  className="custom-control-label"  htmlFor={id}>{`Agree with `}</label> <span onClick={handleShow} style={{color: "blue", textDecoration: "underline", cursor: "pointer"}}>Terms and Privacy? </span>
            </div>
          <Modal {...props} size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered show={show} onHide={handleClose} animation={true}>
            <Modal.Header closeButton>
              <Modal.Title> Terms and Privacy.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                  <p>
                  Your really read this? 😻 
                  </p>
 </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

    export default AgreeTermsPrivacy;