import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import './consoleSetting.css'

function ConsoleSetting({isLoggedIn, setisLoggedIn}) {
    
    let time = new Date();    

    const [show, setShow] = useState(false);
    const [currentdate, setCurrentdate] = useState(time)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const updateTime = () => {
        time = new Date();
        setCurrentdate(time)
    }

    setInterval(updateTime, 1000)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        if(username == "db_admin" && password == "em1OdkTBEdgk9OLD"){
            setisLoggedIn(true)
            setShow(false)
        } else {
            alert('User Name and Password not matched!')
        }
    }

    return (
        <>
            <div onClick={handleShow}>
                <div className="headerDateContainer">
                <span className="headerDateTxt">{currentdate.getFullYear()} {currentdate.getMonth() + 1 < 10 ? "0" + (currentdate.getMonth() + 1) : currentdate.getMonth() + 1}/{currentdate.getDate() < 10 ? "0"+currentdate.getDate() : currentdate.getDate() } {currentdate.getHours() < 10 ? "0"+currentdate.getHours() : currentdate.getHours()}:{currentdate.getMinutes() < 10 ? "0"+currentdate.getMinutes() : currentdate.getMinutes()} </span>
                </div>
                <div className="headerLogoContainer">
                    
                    <img src="images/om_khlogo.svg" className="headerLogo" />
            
                </div>
            </div>
        

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="console__modal"
            >
                <Modal.Header closeButton>
                </Modal.Header>
                    <div className="modal__header">
                        <div style={{marginLeft: 83, fontWeight: 'bold'}}>Console Setting</div>
                    </div>

                    <form >
                        <div className="form__row">
                            <label className="creds">Login ID</label>
                            <input type="password" onChange={e => setUsername(e.target.value)} value={isLoggedIn ? username : username} />
                        </div>
                        <div className="form__row">
                            <label className="creds">Password</label>
                            <input type="password" onChange={e => setPassword(e.target.value)} value={isLoggedIn ? password : password} />
                        </div>

                        <div className="form__row checkbox__row">
                            <label for="food1">Standby 状態のオーダーを非表示</label>
                            {/* <input type="checkbox" id="food1" name="food-1" value="dish1"/> */}
                            <div class="checkbox">
                                <input type="checkbox" class="input-assumpte" id="input-confidencial1" />
                                <label for="input-confidencial1"></label>
                            </div>
                        </div>
                        
                        <div className="form__row checkbox__row">
                            <label for="food2">New Order を自動的に開く</label>
                            <div class="checkbox">
                                <input type="checkbox" class="input-assumpte" id="input-confidencial2" />
                                <label for="input-confidencial2"></label>
                            </div>
                        </div>
                        <div className="form__row checkbox__row">
                            <label for="food3">ログイン状態を維持する</label>
                            <div class="checkbox">
                                <input type="checkbox" class="input-assumpte" id="input-confidencial3" />
                                <label for="input-confidencial3"></label>
                            </div>
                        </div>

                        <div className="form__row ringtone__row">
                            <label>Ringing Tone</label>
                            <ul>
                                <div>
                                    <li>Bell1</li>
                                    <li>Bell1</li>
                                    <li>Bell1</li>
                                    <li className="ringtone__active">Bell1</li>
                                    <li>Bell1</li>
                                    <li>Bell1</li>
                                    <li>Bell1</li>
                                    <li>Bell1</li>
                                    <li>Bell1</li>
                                    <li>Bell1</li>
                                    <li>Bell1</li>
                                    <li>Bell1</li>
                                    <li>Bell1</li>
                                    <li>Bell1</li>
                                </div>
                            </ul>

                        </div>
                        <div className="savebutton" onClick={handleSubmit}>
                            <div>Save</div>
                        </div>
                    </form>
            </Modal>
        </>
    );
}

export default ConsoleSetting
