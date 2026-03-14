import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatequan } from '../slice/cartSlice'

const CartPage = () => {

  const { cartItems } = useSelector(state => state.cart)
  const dispatch = useDispatch();

  return (
     <div className='container m-5'>
            <div className='row'>
                <div className='col'>
                    {cartItems.length === 0 ? (<p>Your Cart is Empty</p>) : (
                        <table className='table table-bordered text-center align-middle'>
                            <thead className="table-dark">
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Update</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cartItems.map((product, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                style={{
                                                    width: "80px",
                                                    height: "80px",
                                                    objectFit: "cover",
                                                    borderRadius: "8px"
                                                }}
                                            />
                                        </td>

                                        <td>{product.name}</td>

                                        <td>₹{product.price}</td>

                                        <td>{product.quantity}</td>

                                        <td>
                                            <button
                                                onClick={() => dispatch( updatequan({pid : product.id , change : -1}) )}
                                                className="btn btn-sm btn-secondary"
                                            >
                                                -
                                            </button>

                                            <span className="mx-2">
                                                {product.quantity}
                                            </span>

                                            <button
                                                onClick={() => dispatch( updatequan({pid : product.id , change : 1}) )}
                                                className="btn btn-sm btn-secondary"
                                            >
                                                +
                                            </button>
                                        </td>

                                        <td>₹{product.price * product.quantity}</td>

                                        <td>
                                            <button
                                                className="btn btn-sm btn-danger"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>


                    )
                    }
                </div>
            </div>
        </div>

  )
}

export default CartPage