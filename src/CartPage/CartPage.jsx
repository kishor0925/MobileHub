import React from 'react'
import { useSelector } from 'react-redux'

const CartPage = () => {

  const {products} = useSelector(state => state.cartItems)
  return (
    <div>
        {products.map( (pro) => (
            <div>
                <h1>{pro.id}</h1>
                <img src = {pro.img} />
            </div>
        ))
        } 
    </div>
  )
}

export default CartPage
