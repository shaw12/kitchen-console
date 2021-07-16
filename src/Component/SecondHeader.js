import React, { useState } from 'react'
import ShopDetails from './ShopDetails'

const SecondHeader=()=>{

    const [currentShop, setCurrentShop] = useState(null)
    
    return(
        <div className="second__header">
            <div className="header__card" onClick={() => setCurrentShop('123')}>
                <img src="/images/icons/Ubereats_gray-51.svg" />
                <div className="header__card__body">
                    <h2>Japanese Text</h2>
                    <h1>ID:0015-01</h1>
                </div>
            </div>
            <div className="header__card">
                <img src="/images/icons/Foodpanda_gray.svg" />
                <div className="header__card__body">
                    <h2>Japanese Text</h2>
                    <h1>ID:0015-02</h1>
                </div>
            </div>
            <div className="header__card">
                <img src="/images/icons/Ubereats_gray-51.svg" />
                <div className="header__card__body">
                    <h2>Japanese Text</h2>
                    <h1>ID:0015-03</h1>
                </div>
            </div>
            <div className="header__card">
                <img src="/images/icons/Takeout _gray.svg" />
                <div className="header__card__body">
                    <h2>Japanese Text</h2>
                    <h1>ID:0015-04</h1>
                </div>
            </div>

            {currentShop !== null && <ShopDetails setCurrentShop={setCurrentShop} />}

        </div>
    )
}

export default SecondHeader;