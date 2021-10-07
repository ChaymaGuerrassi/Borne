import React, { useContext } from 'react'
import CancelIcon from '../Assets/cancel.png'
import { BasketContext } from '../BasketContext'
import BasketLine from '../Components/BasketLine'
import CheckoutLine from '../Components/CheckoutLine'


export default function Basket({setBasketModal}) {

    const {basketList} = useContext(BasketContext)

    return (
        <div>
            <img onClick={() =>{setBasketModal(false)}} className="cancel-icon" src={CancelIcon} alt="" />
            <h2 className="main-title">Mon Panier</h2>
            
            {
                basketList.length > 0 ?
                basketList.map( meal => (
                    <BasketLine key={meal._id} data={meal} />
                ))
                
                :
                <p className="empty-basket">Votre panier est vide.</p>
            }

            {
                basketList.length > 0 &&  <CheckoutLine />
            }
            
        </div>
        
    )
}
