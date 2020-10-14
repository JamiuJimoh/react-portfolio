import React from 'react';
import './Projects/FontAwesomeIcons'
import About from './About/About';
import './Body.css';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import './Intro/Intro.css';

const Body = () => {
	return (
		<div className="body__container">
			<div className="left__sidebar">left</div>
			<div className="main__body">
				<Intro />
				<About />
				<Projects />
			</div>
			<div className="right__sidebar">right</div>
		</div>
	);
};

export default Body;
