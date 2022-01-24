/** @format */

import React from "react";
import back from "../icons/back.svg";

function Topnav() {
	return (
		<div className='topnav'>
			<div className='box' id='logout'>
				<img src={back} width='20px' alt='back'></img>
			</div>
			<div className='box' id='profile'></div>
		</div>
	);
}

export default Topnav;
