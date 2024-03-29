import React, { useContext } from 'react'
import { cartContext } from './CartProvider'

const RemoveToCartButton = ({item}) => {
  const { RemoveToCartButton } = useContext(cartContext);

  const handleClick = () => {
    RemoveToCartButton()
  }
    
  return (
    <button onClick={handleClick}>Remove From Cart</button>
  )
}

export default RemoveToCartButton