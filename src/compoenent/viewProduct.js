import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";


const ViewProduct = () => {
  const [products, setProducts] = useState();
  let { ProductId }= useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${ProductId}`)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      }, []);
  });
  return (
    <>

  {products &&  <h1> title:{products.title}</h1>}
  {products &&  <h1>des: {products.description}</h1>}
  {products &&  <h1> prc:{products.price}$</h1>}
      
    </>
  );
}

export default ViewProduct;
