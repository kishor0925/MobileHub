import React from "react";
import './Shopbybrand.css'
import infinix from "./Images/infinix.png";
import iphone from "./Images/iphone.png";
import xiaomi from "./Images/mi.png";
import oneplus from "./Images/oneplus.png";
import realme from "./Images/realme.png";
import samsung from './Images/samsung.png';
import vivo from './Images/vivo.png';
import p1 from './Images/poster1.webp'
import p2 from './Images/poster2.webp'
import p3 from './Images/poster3.jpg'
import p4 from './Images/poster4.jpg'


const BrandSlider = () => {

  const image = [
    { img: infinix, brand: "Infinix" },
    { img: iphone, brand: "Apple" },
    { img: xiaomi, brand: "Xiaomi" },
    { img: oneplus, brand: "OnePlus" },
    { img: realme, brand: "Realme" },
    { img: samsung, brand: "Samsung" },
    { img: vivo, brand: "Vivo" }
  ]

  return (
    <div className="container">
      <div className="brand-slider container mt-2">
        <h1 className="text-center mt-2">Authorized Brand </h1>
        <div className="brand-track mt-5">

          <img src={infinix} alt="Apple" />
          <img src={iphone} alt="iphone" />
          <img src={xiaomi} alt="Xiaomi" />
          <img src={oneplus} alt="OnePlus" />
          <img src={realme} alt="realme" />
          <img src={samsung} alt="samsung" />
          <img src={vivo} alt="vivo" />

          <img src={infinix} alt="Apple" />
          <img src={iphone} alt="iphone" />
          <img src={xiaomi} alt="Xiaomi" />
          <img src={oneplus} alt="OnePlus" />
          <img src={realme} alt="realme" />
          <img src={samsung} alt="samsung" />
          <img src={vivo} alt="vivo" />

        </div>
      </div>


      <div className="shpbyctrgy container mt-2">
        <h1 className="text-center mt-2">Shop By Brand</h1>


        <div className="cards mt-2">
          {image.map((imgs, index) => (
            <div className="card-item mt-5" key={index}>
              <img src={imgs.img} alt={imgs.brand} width={120} />
            </div>
          ))}
        </div>

      </div>

      <div className="poster container mt-5">
        <div className="row g-3">

          <div className="col-12 col-md-6">
            <img src={p1} alt="poster1" className="img-fluid poster-img" />
          </div>

          <div className="col-12 col-md-6">
            <img src={p2} alt="poster2" className="img-fluid poster-img" />
          </div>

           <div className="col-12 col-md-6">
            <img src={p3} alt="poster2" className="img-fluid poster-img" />
          </div>


          <div className="col-12 col-md-6">
            <img src={p4} alt="poster2" className="img-fluid poster-img" />
          </div>

        </div>
      </div>


    </div>

  );
};

export default BrandSlider;