import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import CancelModal from './CancelModal';

function OrderDetail({setCurrentOder}) {

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false)
    setCurrentOder(null)
  };
  const handleShow = () => setShow(true);

  return (
    <>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="order__modal"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        
        <div className="modal__header">
          <div style={{marginLeft: 83}}>Order detail</div>
        </div>

        <div className="modal__body">
          
          <img src="/images/icons/Ubereats_gray-54.svg" />
          
          <div className="modal__body__content">
            <div className="modal__body__heading">your name</div>
            <div className="modal__body__heading">id: 1122334W</div>
            <div className="modal__body__heading other">aded:12:10</div>
            <div className="modal__body__heading other">status:create</div>
            <div className="modal__body__heading other">tel:080-0000-0000</div>
            <div style={{lineHeight: '22px'}}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              <p className="view">View -></p>
            </div>
          </div>
        
        </div>

        <hr />

        <div className="foodcontent">
            <ul>
              <div className="foodcontent__body">
                <div>
                  <li className="foodcontent__main">Random Dish 300g</li>
                  <ul className="foodcontent__sub">
                    <li>with yes</li>
                    <li>with no</li>
                    <li>without all</li>
                  </ul>
                </div>
                <div className="totalcount">
                  <p>2</p>
                </div>
              </div>
              
              <div className="foodcontent__body">
                <div>
                  <li className="foodcontent__main">Random Dish 300g</li>
                  <ul className="foodcontent__sub">
                    <li>with yes</li>
                    <li>with no</li>
                    <li>without all</li>
                  </ul>
                </div>
                <div className="totalcount">
                  <p>2</p>
                </div>
              </div>
              
              <div className="foodcontent__body">
                <div>
                  <li className="foodcontent__main">Random Dish 300g</li>
                  <ul className="foodcontent__sub">
                    <li>with yes</li>
                    <li>with no</li>
                    <li>without all</li>
                  </ul>
                </div>
                <div className="totalcount">
                  <p>2</p>
                </div>
              </div>
              
              <div className="foodcontent__body">
                <div>
                  <li className="foodcontent__main">Random Dish 300g</li>
                  <ul className="foodcontent__sub">
                    <li>with yes</li>
                    <li>with no</li>
                    <li>without all</li>
                  </ul>
                </div>
                <div className="totalcount">
                  <p>2</p>
                </div>
              </div>
              

              
            </ul>
        </div>

        <hr />

        <CancelModal />

      </Modal>
    </>
  );
}

export default OrderDetail
