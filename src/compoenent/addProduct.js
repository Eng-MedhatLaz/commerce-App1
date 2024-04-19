import React, { useState } from "react";
// import {axios} from 'axios'

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

  //   axios.post('https://fakestoreapi.com/products' , {
  //     title,
  //     price
  //   } ).then((data) =>{
  //     console.log(data);

    
  // })

    fetch('https://fakestoreapi.com/products'  ,{
      method: "POST",
      body: JSON.stringify({
        title,
        price
      })
      }).then((res) => res.json())
      .then((data) =>{
        console.log(data);

      
    })
  };
  return (
    <div>
      <h1>add product</h1>

      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="producttitle" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-control"
            id="producttitle"
            aria-describedby="emailHelp"
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productprice" className="form-label">
            price
          </label>
          <input
            type="number"
            className="form-control"
            id="productprice"
            aria-describedby="emailHelp"
            onChange={(e)=>setPrice(+e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
