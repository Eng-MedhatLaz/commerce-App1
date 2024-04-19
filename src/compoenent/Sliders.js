import React from 'react';
import image1 from '../compoenent/img/73754f25f55fcd88b0b07ac2fff6a2ae.jpg';
import image2 from '../compoenent/img/blog-1.jpg';
import image3 from '../compoenent/img/menu-07.jpg';
import './sliders.css';
const Sliders = () => {
  return (
    <>
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1}className="d-block w-100 height-300" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100 height-300" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100 height-300" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}

export default Sliders;
