import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const {product , showButton}= props;

  return (
    <>
    <div className="card w-100 h-100 m-3 p-4">
  <img src={product.image} className="card-img-top w-50 h-50"alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.price}</p>
    {showButton && <Link className="btn btn-primary" to={`/product/${product.id}`}>details</Link>}
  
  </div>
</div>
    </>
  );
}

export default Product;
