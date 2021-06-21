import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import './Oderpage.css'

const OderPage = (props) => {

  const [logInUser,setLogInUser] =useContext(UserContext);
  const { from } = { from: { pathname: "/" } };
  const history = useHistory();

  const {_id} = useParams();
  const [oderProduct, setOderProduct] = useState([])
  useEffect(()=>{
    fetch(`https://intense-cliffs-13343.herokuapp.com/product/${_id}`)
    .then(res => res.json())
    .then(data => setOderProduct(data))
  })
  
const handleOder = () => {
    const oderDetails = {...logInUser , product : oderProduct , oderTime : new Date()}
    fetch('https://intense-cliffs-13343.herokuapp.com/oder', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(oderDetails)
     })
     .then(res => res.json())
     .then(data => {
       if(data){
         alert("Your oder successfully please pay for confirm")
         history.replace(from);
       }
     })

     console.log(oderDetails)

}
    
    
    // console.log(data)

  return (
      <div
        style={{ backgroundColor: "#b2cb98"}}
        className=" p-5"
      >
        <h1 style={{textAlign: "center"}}>Oder Details</h1>
        <h1 style={{textAlign: "center"}}>---------------------------------------------------------</h1>
        <h2 style={{textAlign: "center"}}>{oderProduct.name}</h2>
        <h3 style={{textAlign: "center"}}>Price: ${oderProduct.price}</h3>
       <center><img  className="m-5 productimg"  src={oderProduct.url} alt=""/>
       <button onClick={() =>handleOder()} className="btn btn-primary" style={{width: "200px"}}>Check Out</button></center> 
      </div>
        );
};

export default OderPage;
