import React, { useState } from 'react';
import Header from '../Component/Header';
import SecondHeader from '../Component/SecondHeader';
import Menu from '../Component/Menu';


const HomePage=()=>{
    const [isLoggedIn, setisLoggedIn] = useState(false)
    return(
        <div>
            <Header isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
            <SecondHeader/>
            {
                isLoggedIn ? <Menu /> : <div style={{width: "100%", height: '75vh'}}></div>
            }
            
        </div>
    )
}

export default HomePage;