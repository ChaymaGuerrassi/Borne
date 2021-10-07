import React, {useState} from 'react'
import Modal from '../Modals/Modal';
import shoppingBasket from '../Assets/shopping-basket.png'
import Basket from '../Views/Basket';

export default function Navbar() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    return (
        <div id="navbar">
            <div className="nav-bar-wrapper">
                
                <div className="basket" onClick={handleClick}>
                    <img src={shoppingBasket} alt="" className="shoppingBasket"/>
                </div>
                
                <div className="input-set">
                    <input type="text" placeholder="Code Promo" />
                </div>
                <div className="price"><span> 0.00 </span> €</div>

            </div>
            {
                showModal &&  
                <Modal setModal={setShowModal}> 
                    <Basket setBasketModal={setShowModal}/>
                </Modal>
            }
           
        </div>
        
    )
}
