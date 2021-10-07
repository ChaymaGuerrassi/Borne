import React, {useState, useContext} from 'react'
import { BasketContext } from '../BasketContext'

export default function BasketLine({data}) {

    const {basketList, setBasketList} = useContext(BasketContext)

    const handleDeleteItem = () =>{
        const newState = [...basketList]

        let objectIndex = basketList.indexOf(basketList.find(o => o._id === data._id))

        newState.splice(objectIndex, 1)

        setBasketList(newState)

    }
    return (
        <div className="basket-line">
            <div className="basket-item-details">
                <div className="img-basket-container"><img src={data.urlImg} alt="" /></div>
                <h3 className="basket-title">{data.name}</h3>
                <div className="quantity card-price">{data.quantiteBasket}</div>
                <div className="basket-item-price card-price">{data.price}€</div>
            </div>
            <div className="delete-item-button" onClick={handleDeleteItem}>Supprimer</div>
            <div className="line"></div>
        </div>
    )
}
