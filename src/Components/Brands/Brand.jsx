import React, { useReducer } from 'react'
import products from './BrandInfo'
const Brand = () => {

    const initialState = {
        brand : "all"
    }

    const reducerFn = (state, action) => {
        if(action.type === "SetBrand"){
            return {...state , brand : action.payload}
        }
    }

    const [state, dispatch] = useReducer(reducerFn, initialState);

    const filterproducts = products.filter((product) => (
        state.brand === "all" ? product : product.brand === state.brand

    ))

  return (
    <div>
        <button 
         onClick={() => dispatch({type : "Setbrand" , payload : "all"})}
        >
            All
        </button>
        <button 
         onClick={() => dispatch({type : "Setbrand" , payload : "redmi"})}
        >
            Redmi
        </button >
        <button
        onClick={() => {dispatch({type : "Setbrand" , payload : "realme"})}}
        >
            Realme
        </button>
        <button 
        onClick={() => {dispatch({type : "Setbrand" , payload : "apple"})}}
        >
            Apple
        </button>
        <button 
        onClick={() => {dispatch({type : "SetBrand" , payload : "vivo"})}}
        >
            Vivo
        </button>


        <div className='container'>
            {
                filterproducts.map( fltrproduct => (
                    <div className="card p-3 h-100">

                            <img
                                src={fltrproduct.image}
                                alt={fltrproduct.name}
                                className="img-fluid"
                                style={{ height: "200px", objectFit: "cover" }}
                            />

                            <h5 className="mt-3">{fltrproduct.name}</h5>

                            <p>{fltrproduct.description}</p>

                            <h6>₹{fltrproduct.price}</h6>

                            <button className="btn btn-dark mt-2">
                                Buy Now
                            </button>

                        </div>

                ) )
            }
        </div>
      
    </div>
  )
}

export default Brand
