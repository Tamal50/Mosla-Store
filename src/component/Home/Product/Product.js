import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductDetails from './ProductDetails/ProductDetails'
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

const Product = () => {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('https://intense-cliffs-13343.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProduct(data));
    })
    
  
    return (
        <section>
                      
        <div className="mt-5">
        <h1 style={{color: 'red', textAlign: 'center'}}>Choose your service</h1>            
    </div>
     <div className="d-flex justify-content-center">
        <div className="row mt-5">
            {
                product.length === 0 &&  <div> <LinearProgress style={{width: "500px" , marginTop: "100px"}} />  </div>
            }
            {
               product.map(product => <ProductDetails product={product} ></ProductDetails>)
            }
        </div>
    </div>
  </section>
    );
};

export default Product;