/** @format */

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./video.css";

function Video() {
	const navigate = useNavigate();
	let { state } = useLocation();
	if (!state) {
		return navigate("/");
	}
	const { _id, contentURL, contentTitle, contentDescription } = state;
	return (
		<>
			<div className='main'>
				<div id='video'>
					<video src={contentURL} controls width='100%' height='100%'></video>
				</div>
				<br />
				<h1>{contentTitle}</h1>
				<br />
				<p>{contentDescription}</p>
				<div id='right'>
					<div class='buttons'>
						<button>Previous</button>
						<button>Up Next</button>
					</div>
					<aside>
						<h2>Yoga for Couples</h2>
						<div id='video-section'>
							<div class='video-elem'>
								<img
									src='https://images.pexels.com/photos/6494666/pexels-photo-6494666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
									alt=''
									width='110px'
								/>
								<div>
									<h5>Seated centering</h5>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Dolor reprehenderit deleniti, voluptatibus impedit ad
										deserunt esse quod nobis a quae?
									</p>
								</div>
							</div>
							<div class='video-elem'>
								<img
									src='https://images.pexels.com/photos/6494666/pexels-photo-6494666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
									alt=''
									width='110px'
								/>
								<div>
									<h5>Seated centering</h5>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Dolor reprehenderit deleniti, voluptatibus impedit ad
										deserunt esse quod nobis a quae?
									</p>
								</div>
							</div>
							<div class='video-elem'>
								<img
									src='https://images.pexels.com/photos/6494666/pexels-photo-6494666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
									alt=''
									width='110px'
								/>
								<div>
									<h5>Seated centering</h5>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Dolor reprehenderit deleniti, voluptatibus impedit ad
										deserunt esse quod nobis a quae?
									</p>
								</div>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</>
	);
}

export default Video;
