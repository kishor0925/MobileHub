import React, { useReducer } from 'react'
import products from './BrandInfo'
const Brand = () => {


    const initialState = {
        brand : 'all'
    }

    const reducerFn = (state, action) => {
        if(action.type === 'SetBrand'){
           return {...state, brand : action.payload}
        }
    }

    const [state, dispatch] = useReducer(reducerFn , initialState);


   const filterproducts = products.filter((prod) =>
  state.brand === "all" ? products : prod.brand === state.brand
);
  return (
    <div>
       

       <select 
       onChange={(e) => dispatch({type : 'SetBrand' , payload : e.target.value})}
       >

        <option value="all">all</option>
        <option value="apple">apple</option>
        <option value="redmi">redmi</option>
        <option value="realme">realme</option>
       </select>
      
      <div className='container row'>
        {
            filterproducts.map( pro => (
                <div className='card col-12 col-md-4 col-lg-3'>
                    <img src={pro.image} alt="" />
                    <h1>{pro.brand}</h1>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Brand
