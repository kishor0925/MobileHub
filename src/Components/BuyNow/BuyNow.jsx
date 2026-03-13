import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../Brands/BrandInfo'

const BuyNow = () => {

    const { id } = useParams()

    const filterproduct = products.find(pro => pro.id === Number(id))

    if (!filterproduct) {
        return <h2>Product Not Found</h2>
    }

    return (
        <div className='container row d-flex justify-content-center align-items-center'>

            <div className='col-12 col-md-5 col-lg-6'>
                <img src={filterproduct.image} className='img-fluid' />
            </div>

            <div className='col-12 col-md-5 col-lg-6'>
                <h3 className='fw-bold'>{filterproduct.name}</h3>

                <p><b>Display :</b> {filterproduct.specs.display}</p>
                <p><b>OS :</b> {filterproduct.specs.os}</p>
                <p><b>Rear Camera :</b> {filterproduct.specs.rearCamera}</p>
                <p><b>Front Camera :</b> {filterproduct.specs.frontCamera}</p>
                <p><b>Battery :</b> {filterproduct.specs.battery}</p>
                <button>
                    +
                </button>
                <button>
                    -
                </button>

                <button>
                    Add to cart
                </button>
            </div>


            <div className='col-12 col-md-5 col-lg-6'>
                <h1>Product Description</h1>

                <table className="table table-bordered">
                    <tbody>

                        <tr>
                            <th>Model</th>
                            <td>{filterproduct.name}</td>
                        </tr>

                        <tr>
                            <th>Display Size</th>
                            <td>{filterproduct.specs.display}</td>
                        </tr>

                        <tr>
                            <th>OS</th>
                            <td>{filterproduct.specs.os}</td>
                        </tr>

                        <tr>
                            <th>Rear Camera</th>
                            <td>{filterproduct.specs.rearCamera}</td>
                        </tr>

                        <tr>
                            <th>Front Camera</th>
                            <td>{filterproduct.specs.frontCamera}</td>
                        </tr>

                        <tr>
                            <th>Battery</th>
                            <td>{filterproduct.specs.battery}</td>
                        </tr>

                        <tr>
                            <th>Bluetooth Technology</th>
                            <td>{filterproduct.description?.bluetooth}</td>
                        </tr>

                        <tr>
                            <th>USB</th>
                            <td>{filterproduct.description?.usb}</td>
                        </tr>

                        <tr>
                            <th>WLAN</th>
                            <td>{filterproduct.description?.wlan}</td>
                        </tr>

                        <tr>
                            <th>NFC</th>
                            <td>{filterproduct.description?.nfc}</td>
                        </tr>

                        <tr>
                            <th>Sensor</th>
                            <td>{filterproduct.description?.sensor}</td>
                        </tr>

                        <tr>
                            <th>Battery Capacity</th>
                            <td>{filterproduct.description?.batteryCapacity}</td>
                        </tr>

                        <tr>
                            <th>Water Protection</th>
                            <td>{filterproduct.description?.waterProtection}</td>
                        </tr>

                        <tr>
                            <th>Dimension</th>
                            <td>{filterproduct.description?.dimension}</td>
                        </tr>

                        <tr>
                            <th>Colour</th>
                            <td>{filterproduct.description?.colour}</td>
                        </tr>

                        <tr>
                            <th>Weight</th>
                            <td>{filterproduct.description?.weight}</td>
                        </tr>

                        <tr>
                            <th>In The Box</th>
                            <td>{filterproduct.description?.inTheBox}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BuyNow