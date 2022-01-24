/** @format */

import React from "react";
import icontent from "../icons/content.svg";
import iprogram from "../icons/program.svg";
import ilive from "../icons/live.svg";
import idashboard from "../icons/dashboard.svg";
import ibill from "../icons/billing.svg";

import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

function Sidenav() {
	return (
		<div className='sidenav'>
			<div className='heading'>Head</div>
			<div className='nav-items'>
				<span className='nav-links'>
					<img src={idashboard} height='20px' /> Dashboard
				</span>
				<NavLink className='nav-links' to='/user'>
					<img src={icontent} height='20px' /> My Content
				</NavLink>
				<NavLink
					className='nav-links'
					to='/user/program'
					activeClassName='active'>
					{" "}
					<img src={iprogram} height='20px' />
					My Program{" "}
				</NavLink>
				<NavLink className='nav-links' to='/user/live'>
					<img src={ilive} height='20px' /> Join Live
				</NavLink>
				<NavLink className='nav-links' to='/user/billing'>
					{" "}
					<img src={ibill} height='20px' /> Billing
				</NavLink>
			</div>
		</div>
	);
}

export default Sidenav;
