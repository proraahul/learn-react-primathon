import React from 'react'
import { useContext } from 'react'
import { cartContext } from './CartProvider';

const ItemsList = () => {

    const {cartItem} = useContext(cartContext);

  return (
    <ul>
        {
            cartItem.map(item => (
                <li key={item.id}>{item.name}</li>
            ))
        }
    </ul>
  )
}

export default ItemsList