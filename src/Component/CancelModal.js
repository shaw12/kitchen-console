import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';


function CancelModal() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div onClick={handleShow}>
            <div className="modal__footer">
            <div className="pickup">
                <div className="pickup__title">Pickup: </div>
                <h1>12:25</h1>
            </div>

            <div className="cancel">
                <div>Cancel</div>
            </div>

            </div>
        </div>
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="cancel__modal"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        
        <div className="modal__header">
          <div style={{marginLeft: 0}}>Cancel Order</div>
        </div>

        <p>
            id: 121212W
        </p>
        <p>
        order details
        </p>

        <div className="ok__btn" onClick={handleClose}>
            OK
        </div>
        
      </Modal>
    </>
  );
}

export default CancelModal
