import React, { useContext, useState }from 'react'
import { BasketContext } from '../BasketContext'

export default function CheckoutLine() {

    const {basketList} = useContext(BasketContext)
    // const [totalBasket, setTotalBasket] = useState()
    let somme = 0
    basketList.map((item) =>{
        somme = somme + item.price * item.quantiteBasket
    })
    

    return (

        <div className="checkout-line">
            <h3 className="checkout-line-title">A Payer</h3>
            <h3 className="checkout-line-title">{somme}€</h3>
        </div>
    )
}
