import React, { useContext } from 'react'
import { cartContext } from './CartProvider'


const {addToCart} = useContext(cartContext);

const AddToCardButton = ({item}) => {

  const handleClick = () => {
    addToCart(item)
  }

  return (
    <button onClick={handleClick}>Add to Cart</button>
  )
}

export default AddToCardButton