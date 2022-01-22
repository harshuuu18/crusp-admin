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
					<video
						src={
							"https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-down-a-mountain-41576-large.mp4"
						}
						controls
						width='100%'
						height='100%'></video>
				</div>
				<br />
				<h1>Double Plank Pose(Adho Mukha Dandasana)</h1>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
					cupiditate omnis. Officia architecto expedita aspernatur ratione
					minima ullam odit voluptatibus enim veniam consequatur beatae a magnam
					nihil minus consequuntur, est dolore quibusdam harum ipsa ducimus!
					Culpa ad dolorem debitis tempora!
				</p>
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
