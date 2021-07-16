import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import OpenButton from './OpenButton'

function ShopDetails({setCurrentShop}) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    setCurrentShop(null)
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="newOrder__modal shopdetail__modal"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        
        <div className="modal__header">
          <div style={{marginLeft: 83}}>Shop Details</div>
        </div>

        <div className="modal__body">
          
          <img src="/images/icons/Ubereats_gray-54.svg" />
          
          <div className="modal__body__content">
            <div className="modal__body__heading">your name</div>
            <div className="modal__body__heading">id: 1122334W</div>
            <div className="modal__body__heading other">status:OPEN</div>
            <div className="modal__body__heading other">text something</div>
            <div className="modal__body__heading other">tel:080-0000-0000</div>
          </div>
        
        </div>


        <div className="shop__img">

        </div>


        <div className="shopmodal__openbutton">
            <OpenButton />
        </div>

      </Modal>
    </>
  );
}

export default ShopDetails
