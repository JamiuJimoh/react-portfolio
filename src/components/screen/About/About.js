import React from 'react';
import './About.css';

const About = (props) => {
	return (
		<div id="about" data-aos={props.data} className="about__me">
			<div className="about">
				<h1>LET ME INTRODUCE MYSELF</h1>
				<p>
					They say do what you love and you will enjoy every second of work. Learning new things and solving
					arising problems with the computer made me fall in love with web development.
				</p>
				<br />
				<p>
					I am a computer science student in my finals. I am a frontend/backend developer, a footballer and an
					artist. My ability to adapt to different situations and my tendency to work better with a team is a skill I'm proud of. My primary stack is the MERN stack but i could work with other tools if
					need be.
				</p>
			</div>
			<div className="technologies">
				<p>I have recently been working with different technologies like :</p>
				<div className="tech__logos">
					<img src="https://img.icons8.com/color/48/000000/html-5.png" alt="html5 logo" />
					<img src="https://img.icons8.com/color/48/000000/css3.png" alt="css3 logo" />
					<img src="https://img.icons8.com/color/48/000000/javascript-logo-1.png" alt="javascript logo" />
					<img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="mongo db logo" />
					<img src="https://img.icons8.com/color/48/000000/react-native.png" alt="react js logo" />
					<img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="node js logo" />
					<img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="express js logo" />
				</div>
			</div>
		</div>
	);
};

export default About;
