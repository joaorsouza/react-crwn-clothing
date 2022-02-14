import CartActionTypes from "./cart.types";

export const toggleCartHidden = () =>{
    return ({
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    })

}

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItemFomCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})
    
