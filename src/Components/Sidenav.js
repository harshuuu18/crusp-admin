import React from "react";
import icontent from '../icons/content.svg'
import iprogram from '../icons/program.svg'
import ilive from '../icons/live.svg'
import idashboard from '../icons/dashboard.svg'
import ibill from '../icons/billing.svg'

import { BrowserRouter as Router, Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="sidenav">

      <div className="heading">Head</div>
      <div className="nav-items">
         
         <span className="nav-links" ><img src={idashboard} height="20px"/> Dashboard</span>
         <Link className="nav-links" to="/"><img src={icontent} height="20px"/> My Content</Link>
         <Link className="nav-links" to="/program"><img src={iprogram} height="20px"/> My Program</Link>
         <Link className="nav-links" to="/live"><img src={ilive} height="20px"/> Join Live</Link>
         <Link className="nav-links" to="/billing"><img src={ibill} height="20px"/> Billing</Link>
      </div>
    
    </div>
  );
}

export default Sidenav;
