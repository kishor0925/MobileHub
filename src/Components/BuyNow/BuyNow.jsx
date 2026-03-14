import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../Brands/BrandInfo'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../../slice/cartSlice'
import './BuyNow.css'

const BuyNow = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const [qty, setQty] = useState(1)

    const filterproduct = products.find(pro => pro.id === Number(id))


    if (!filterproduct) {
        return <h2 className='text-center mt-5'>Product Not Found</h2>
    }

    function addtocart(){
        alert('Cart added successfully');
        dispatch(addtoCart(filterproduct))
    }

    return (

        <div className='container product-page'>

            <div className='row product-card'>

                {/* Product Image */}
                <div className='col-lg-6 text-center'>
                    <img
                        src={filterproduct.image}
                        className='product-img'
                        alt={filterproduct.name}
                    />
                </div>

                {/* Product Info */}
                <div className='col-lg-6 product-info'>

                    <h2 className='product-title'>{filterproduct.name}</h2>

                    <h4 className='product-price'>₹ {filterproduct.price}</h4>

                    <p><b>Display :</b> {filterproduct.specs.display}</p>
                    <p><b>OS :</b> {filterproduct.specs.os}</p>
                    <p><b>Rear Camera :</b> {filterproduct.specs.rearCamera}</p>
                    <p><b>Front Camera :</b> {filterproduct.specs.frontCamera}</p>
                    <p><b>Battery :</b> {filterproduct.specs.battery}</p>

                    {/* Quantity */}

                    <div className="qty-box">

                        <button
                            onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                            className='qty-btn'
                        >
                            -
                        </button>

                        <span className='qty-number'>{qty}</span>

                        <button
                            onClick={() => setQty(qty + 1)}
                            className='qty-btn'
                        >
                            +
                        </button>

                    </div>

                    {/* Buttons */}

                    <div className='product-buttons'>

                        <button
                            className='btn cart-btn'
                            onClick={addtocart}
                        >
                            Add to Cart
                        </button>

                    </div>

                </div>
            </div>


            {/* Product Description */}

            <div className='product-description mt-5'>

                <h3 className='mb-4'>Product Description</h3>

                <table className="table table-bordered specs-table">

                    <tbody>

                        <tr>
                            <th>Model</th>
                            <td>{filterproduct.name}</td>
                        </tr>

                        <tr>
                            <th>Display Size</th>
                            <td>{filterproduct.descriptions.display}</td>
                        </tr>

                        <tr>
                            <th>OS</th>
                            <td>{filterproduct.descriptions.os}</td>
                        </tr>

                        <tr>
                            <th>Rear Camera</th>
                            <td>{filterproduct.descriptions.rearCamera}</td>
                        </tr>

                        <tr>
                            <th>Front Camera</th>
                            <td>{filterproduct.descriptions.frontCamera}</td>
                        </tr>

                        <tr>
                            <th>Battery</th>
                            <td>{filterproduct.descriptions.battery}</td>
                        </tr>

                        <tr>
                            <th>Bluetooth</th>
                            <td>{filterproduct.descriptions.bluetooth}</td>
                        </tr>

                        <tr>
                            <th>USB</th>
                            <td>{filterproduct.descriptions.usb}</td>
                        </tr>

                        <tr>
                            <th>WLAN</th>
                            <td>{filterproduct.descriptions.wlan}</td>
                        </tr>

                        <tr>
                            <th>NFC</th>
                            <td>{filterproduct.descriptions.nfc}</td>
                        </tr>

                        <tr>
                            <th>Sensor</th>
                            <td>{filterproduct.descriptions.sensor}</td>
                        </tr>

                        <tr>
                            <th>Battery Capacity</th>
                            <td>{filterproduct.descriptions.batteryCapacity}</td>
                        </tr>

                        <tr>
                            <th>Water Protection</th>
                            <td>{filterproduct.descriptions.waterProtection}</td>
                        </tr>

                        <tr>
                            <th>Dimension</th>
                            <td>{filterproduct.descriptions.dimension}</td>
                        </tr>

                        <tr>
                            <th>Colour</th>
                            <td>{filterproduct.descriptions.colour}</td>
                        </tr>

                        <tr>
                            <th>Weight</th>
                            <td>{filterproduct.descriptions.weight}</td>
                        </tr>

                        <tr>
                            <th>In The Box</th>
                            <td>{filterproduct.descriptions.inTheBox}</td>
                        </tr>

                    </tbody>

                </table>

            </div>



        </div>
    )
}

export default BuyNow