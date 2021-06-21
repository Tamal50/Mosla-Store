import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../../App";

const OderDetails = () => {
  const [logInUser, setLogInUser] = useContext(UserContext);
  const [oder, setOder] = useState([]);
  useEffect(() => {
    fetch("http://intense-cliffs-13343.herokuapp.com/oderDetails?email=" + logInUser.email)
      .then((res) => res.json())
      .then((data) => setOder(data));
  }, []);

  return (
    <div className="row">
      <h1>You have : {oder.length} Oder</h1>

      {oder.map((oderDetails) => (
        // <div className=" m-5">
        //   <h3>Oder Time: {oderDetails?.oderTime}</h3>
        //   <h3>Name: {oderDetails?.name}</h3>
        //   <h3>Oder email: {oderDetails?.email}</h3>
        //   <h2>Product Name: {oderDetails?.product?.name}</h2>
        //   <h2>Price: $ {oderDetails?.product.price}</h2>
        // </div>
        <div class="card col-5 m-5">
          <div className="row">
          <div class="col-6">
            <center><img style={{height: "300px" }} src={oderDetails?.product.url} alt="..."></img></center>
          </div>
          <div class="col-6">
            <div class="card-body">
              <h5 class="card-title">{oderDetails?.product?.name}</h5>
              <h5 class="card-title">Price : ${oderDetails?.product?.price}</h5>
              <p class="card-title">Oder receive from this email : {oderDetails?.email}</p>
              <p class="card-text">Oder Time : {oderDetails?.oderTime}</p>
            </div>
            </div>
          </div>
      </div>
      ))}
    </div>
  );
};

export default OderDetails;
