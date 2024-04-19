import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {

  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllproducts();
  },[]);

  const getAllproducts = function(){
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    });
  }

  const deleteProduct = function(ProductId){
    // alert("are you sure")
    fetch(`https://fakestoreapi.com/products/${ProductId}`  ,{
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
      
        getAllproducts();
      });
  }
  return (
    <>
      <h1> welcome in about</h1>
      <Link to={"/about/add"} className="btn btn-success mt-5">
        add to product
      </Link>
      <table className="mx-auto p-5 w-100 mt-5">
        <thead className=" p-5">
          <th className="p-3">ID</th>
          <th>title</th>
          <th>price</th>
          <th>opertion</th>
        </thead>

        <tbody>
          {products.map((products) => {
            return (
              <tr>
                <td>{products.id}</td>
                <td>{products.title}</td>
                <td>{products.price}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=> deleteProduct(products.id)}>Delete</button>
                  <Link to={`/about/${products.id}`} className="btn btn-info">view</Link>
                  <button className="btn btn-primary">edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default About;
