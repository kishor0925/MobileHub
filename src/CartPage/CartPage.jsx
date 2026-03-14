import React from 'react'
import { useSelector } from 'react-redux'

const CartPage = () => {

  const { cartItems } = useSelector(state => state.cart)

  return (
    <div className='container'>
      {cartItems.map((pro) => (
        <div key={pro.id}>
          <h1>{pro.id}</h1>
          <img src={pro.img} alt="" />
          <p>Qty: {pro.quantity}</p>
        </div>
      ))}
    </div>
  )
}

export default CartPage