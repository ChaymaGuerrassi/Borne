import React, {useState, useContext} from 'react'
import Modal from '../Modals/Modal';
import CancelIcon from '../Assets/cancel.png'
import { BasketContext } from '../BasketContext'

export default function CategoryCard({catData, modal=false}) {

    const [showModal, setShowModal] = useState(false)

    const {basketList} = useContext(BasketContext)
    const {setBasketList} = useContext(BasketContext)

    const handleClick = () =>{
        setShowModal(true)
    }

    const handleAddToCart = () =>{
         
        //Copie du tableau
        const newState = [...basketList]

        //Récupérer l'index du plats s'il est déjà dans le panier
        let objectIndex = basketList.indexOf(basketList.find(o => o._id === catData._id))

        if(objectIndex >= 0){
            newState[objectIndex].quantiteBasket++
        } else {
            newState.push({...catData, quantiteBasket: 1})
        }
        setBasketList(newState)
    }
    return (
        <>
            <div className="category-card" onClick={handleClick}>
                <div className="img-container"><img src={catData.urlImg} alt="" /></div>
                <div className="cardDescription">
                    <h3 className="category-title">{catData.name}</h3>
                    {
                        catData.price &&
                        <h3 className="card-price">{catData.price}€</h3>
                    }
                </div>
                
            </div>

            {
                showModal && modal 
                && 
                <Modal setModal={setShowModal}>
                    <img onClick={() =>{setShowModal(false)}} className="cancel-icon" src={CancelIcon} alt="" />
                    <div className="plate-details">
                        <div >
                            <div className="img-container"><img src={catData.urlImg} alt="" /></div>
                        </div>
                        <div className="plate-details-title">
                            <h2 className="main-title">{catData.name}</h2>
                            <h3 className="card-price">{catData.price} €</h3>
                            <p className="modal-description">{catData.description}</p>
                        </div>
                        
                    </div>
                    
                    <div className="buttons">
                        <button className="add-to-cart" onClick={handleAddToCart}>Ajouter au panier</button>
                        <button className="cancel-button" onClick={() =>{setShowModal(false)}}>Annuler</button>
                    </div>
                    
                    
                </Modal>
            }
        </>
    )
}
