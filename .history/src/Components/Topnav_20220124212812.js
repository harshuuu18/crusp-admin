/** @format */

import React from "react";
import back from "../icons/back.svg";

function Topnav() {
	return (
		<div className='topnav'>
			<div className='box' id='logout'></div>
			<div className='box' id='profile'>
				<img src={back} width='20px' alt='back'></img>
			</div>
		</div>
	);
}

export default Topnav;
