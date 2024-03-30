import React from 'react'
import { useContext } from 'react'
import { cartContext } from './CartProvider';

const ItemsList = () => {

  const { cartItem } = useContext(cartContext);
  // console.log(cartItem);

  return (
    <ul>
      {
        cartItem.map((ele, index) => <li key={ele.index}>{ele.name}</li>)
      }
    </ul>
  )
}

export default ItemsList