import { useState } from "react";
import { createContext } from "react"


const cartContext = createContext();

const CartProvider = () => {
const [cartItem, setCartItem] = useState([]);




  return (
    <cartContext.Provider value>

    </cartContext.Provider>
  )
}

export default CartProvider