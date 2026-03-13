import React, { useReducer } from "react";
import products from "./BrandInfo";
import "./Brand.css";
import { Link } from "react-router-dom";
const Brand = () => {

  const initialState = {
    brand: "all",
    sort: "popularity"
  };

  const reducerFn = (state, action) => {
    if (action.type === "SetBrand") {
      return { ...state, brand: action.payload };
    }
    if (action.type === "SetSort") {
      return { ...state, sort: action.payload };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  let filterproducts =
    state.brand === "all"
      ? products
      : products.filter((prod) => prod.brand === state.brand)

  if (state.sort === "low") {
    filterproducts = [...filterproducts].sort((a, b) => (
      a.price - b.price
    ))
  }

  if (state.sort === "high") {
    filterproducts = [...filterproducts].sort((a, b) => (
      b.price - a.price
    ))
  }
  ;

  return (
    <div className="brand-page container mt-5">

      <h2 className="text-center mb-4">Choose your Brand</h2>

      {/* Brand Filter */}
      <div className="filter-box mb-4">

        <div className="row g-3 align-items-center">

          <div className="col-md-6">
            <label className="filter-label">Filter by Brand</label>
            <select
              className="form-select"
              onChange={(e) =>
                dispatch({ type: "SetBrand", payload: e.target.value })
              }
            >
              <option value="all">All Brands</option>
              <option value="apple">Apple</option>
              <option value="redmi">Redmi</option>
              <option value="realme">Realme</option>
              <option value="samsung">Samsung</option>
              <option value="vivo">Vivo</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="filter-label">Sort by Price</label>
            <select
              className="form-select"
              onChange={(e) =>
                dispatch({ type: "SetSort", payload: e.target.value })
              }
            >
              <option value="popularity">Newest First</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
            </select>
          </div>

        </div>

      </div>
      <div className="row g-4">

        {filterproducts.map((pro) => (
          <div key={pro.id} className="col-12 col-md-6 col-lg-3">

            <div className="product-card">
           
              {/* Image */}
              <div className="product-img">
                <img src={pro.image} alt={pro.name} />
              </div>

                 <span className="badge bg-danger text-white">HOT</span>

              {/* Product Info */}
              <div className="product-info">

                <h5 className="product-title">{pro.name}</h5>

                <p className="brand-name">{pro.brand.toUpperCase()}</p>

                <p className="product-desc">
                  {pro.description}
                </p>

                <div className="price-section">
                  <span className="price">Price : ₹{pro.price}</span>
                  <span className="old-price"> ₹{pro.price + 8000}</span>
                </div>

                <div className="card-buttons">

                <Link to = {`/product/${pro.id}`}>
                  <button className="buy-btn">
                    Buy Now
                  </button>
                </Link>
                  
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Brand;