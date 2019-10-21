import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
      const    activeLink = {
            fontWeight: "bold",
            color: "red"
          };
      return (
      <div className="container-fluid mt-5 mb-5">
            <div className="row">
                  <div className="col-12">
                        <hr/>
                  </div>
                  <div className="col-12">
                  
                        <NavLink activeStyle={activeLink} className="nav-link"  to="/check-order-status" >Check Order Status</NavLink>
                        <NavLink activeStyle={activeLink} className="nav-link"  to="/terms-of-service" >Terms Of Service</NavLink>
                  </div>
                  <div className="col-12">
                        <div className=" pt-3 pb-5 text-center">
                          Made with <span role="img" aria-label="img">💘</span> in Israel.
                          <p>
                         Copyright © 2019 Ekaterina Preobrazhenski. All Rights Reserved.
                         </p>
                        </div>
                  </div>
            </div>
      </div>
      )
}

export default Footer;