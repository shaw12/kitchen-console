import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

function NewOrder() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isExpandable, setIsExpandable] = useState(false)

  return (
    <>
        <div onClick={handleShow}>
        {/* <div className="headerBellNumberContainer">
            <p className="headerBellNumber">2</p>
        </div> */}
        <img src="images/bell-regular.png" className="headerBellLogo" />
        </div>
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="newOrder__modal"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        
        <div className="modal__header">
          <div style={{marginLeft: 83}}>New Order</div>
        </div>

        <div className="modal__body">
          
          <img src="/images/icons/Ubereats_gray-54.svg" />
          
          <div className="modal__body__content">
            <div className="modal__body__heading">your name</div>
            <div className="modal__body__heading">id: 1122334W</div>
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

        <div>
            <div className="pickup">
                <div className="pickup__title">Pickup: </div>
                <h1 style={{fontSize: 50, marginRight: 3}}>12:25</h1>
                <h1 className="pickup__icon pickup__icon__plus"></h1>
                <h1 className="pickup__icon"></h1>
            </div>

            <div className="accept__button">
                <p>Accept</p>
            </div>

            <div className={ `${!isExpandable ? 'blackstrip__low' : 'blackstrip__high'}`} onClick={() => setIsExpandable(!isExpandable)}>
                {
                  !isExpandable ? '' : (<div className="denial">Denial</div>)
                }
            </div>
        </div>

      </Modal>
    </>
  );
}

export default NewOrder
