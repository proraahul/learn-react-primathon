import { useState } from "react";
import { createContext } from "react"
import AddToCardButton from "./AddToCardButton";
import RemoveFromCartButton from "./RemoveToCartButton";
import ItemsList from "./ItemsList";


export const cartContext = createContext();

const CartProvider = () => {
  const [cartItem, setCartItem] = useState([]);

  const AddToCart = (item) => {
    setCartItem((prevItem) => [{ ...prevItem, item }]);
  }

  const RemoveFromCart = (item) => {
    setCartItem(prevItems =>
      prevItems.filter(cartItem => cartItem.id !== item.id)
    );
  }


  return (
    <cartContext.Provider value={{ cartItem, AddToCart, RemoveFromCart }} >
      <div className="border flex justify-around">
        <ItemsList />
        <AddToCardButton item={{ id: 1, name: 'item1' }} />
        <AddToCardButton item={{ id: 2, name: 'item2' }} />
        <RemoveFromCartButton item={{ id: 1, name: 'item1' }} />
      </div>
    </cartContext.Provider>
  )
}

export default CartProvider