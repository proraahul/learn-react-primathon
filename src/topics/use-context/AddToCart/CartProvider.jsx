import { useState } from "react";
import { createContext } from "react"
import ItemsList from "./ItemsList";


const cartContext = createContext();

const CartProvider = () => {
const [cartItem, setCartItem] = useState([]);

const AddToCart = (item) =>{ 
    setCartItem((prevItem) => [...prevItem, item]);
}

const removeFromCart = (item) => {
    setCartItem(prevItems => 
      prevItems.filter(cartItem => cartItem.id !== item.id)
      );
}


  return (
    <cartContext.Provider value={{cartItem, AddToCart, removeFromCart}}>
      <ItemsList />
      <AddToCart item={{id:1, name: 'item1'}}/>
      <removeFromCart item={{id:2, name: 'item2'}}/>
    </cartContext.Provider>
  )
}

export default CartProvider