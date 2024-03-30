import React, { useContext } from 'react'
import { cartContext } from './CartProvider'

const AddToCardButton = ({ item }) => {
  const { AddToCart } = useContext(cartContext);

  const handleClick = () => {
    AddToCart(item)
  }

  return (
    <button onClick={handleClick} className='border p-2 m-3 bg-green-600 text-white font-semibold'>Add to Cart</button>
  )
}

export default AddToCardButton