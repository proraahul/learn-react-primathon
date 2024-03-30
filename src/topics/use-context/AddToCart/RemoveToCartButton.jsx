import React, { useContext } from 'react'
import { cartContext } from './CartProvider'

const RemoveToCartButton = ({ item }) => {
  const { RemoveFromCart } = useContext(cartContext);

  const handleClick = () => {
    RemoveFromCart(item)
  }

  return (
    <button onClick={handleClick} className='border p-2 m-3 bg-green-600 text-white font-semibold'>Remove From Cart</button>
  )
}

export default RemoveToCartButton