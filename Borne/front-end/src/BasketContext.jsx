import React from 'react'

export const BasketContext = React.createContext({
    basketList : [],
    setBasketList : data => {}
})