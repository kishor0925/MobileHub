import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../Brands/BrandInfo';

const BuyNow = () => {


    const {id} = useParams();

    const filterproduct = products.filter(pro => pro.id === id)
  return (
    <div>
        {filterproduct.map(prds => (
            <div>
                <h1>{prds.name}</h1>
                <h2>{prds.description}</h2>
            </div>
        ))}
    </div>
  )
}

export default BuyNow
