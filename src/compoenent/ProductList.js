import React, { useEffect, useState } from 'react';
import Product from './product';

const ProductList = () => {
  const api_url = "https://fakestoreapi.com/products";
  const [products , setproducts] = useState([]);
  const [Categories , setGetegory] = useState([]);

  const getProduct= ()=>{
    fetch(api_url)
    .then((res) => res.json())
    .then((data)=>setproducts(data))
  }
  const getCategories= ()=>{
    fetch(`${api_url}/Categories`)
    .then((res) => res.json())
    .then((data)=>setGetegory(data))
  }
  const getProductInCategories= (catName)=>{
    fetch(`${api_url}/category/${catName}`)
    .then((res) => res.json())
    .then((data)=>setproducts(data))
  }
  useEffect( ()=>{ 
    getProduct();
    getCategories();
    },[] )
  return (
    <>
        <div className="product">
        <h2>our products</h2>
        <button  onClick={()=> {
            getProduct()
            }} className='btn btn-info'> all</button>
        {
          Categories.map((cat) => {
            return <button key={cat} onClick={()=> {
              getProductInCategories(cat)
            }} className='btn btn-info'> {cat}</button>
          })
        }
        <div className="row">
        {products.map((product)=>{
                return(
                  <div className="col-3" key={product.id}>
                  <Product product={product} showButton={true}/>
                    </div>
                )
        })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
