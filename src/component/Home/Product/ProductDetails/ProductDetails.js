import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ProductDetails = (props) => {

    const product = props.product

    const loadProduct = (_id) => {
        fetch(`https://intense-cliffs-13343.herokuapp.com/product/${_id}`)
        .then(res => res.json())
        .then(data =>{
          console.log(data)
        })
      }
    
    return (
        <center className="col-sm-4 p-5">
            <img style={{height:'200px'}} src={product.url} alt=""/>
            <h6>{product.name}</h6>
            <h2>Price: ${product.price}</h2>
            <Link to={"/oder/"+product._id}> <button onClick={() => loadProduct(product._id)} className="btn btn-danger">Buy Now</button></Link>
        </center>
    
    );
};

export default ProductDetails;