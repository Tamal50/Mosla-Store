import React from "react";
import Sidebar from "./Sidebar/Sidebar";


const Layout = (props) => {
  return (
    <section>
      <div className="row">
        <div style={{backgroundColor: '#5edcca'}} className="col-md-2 col-sm-4 p-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 p-5">
          {props.children }

      </div>
        
      </div>
    </section>
  );
};

export default Layout;