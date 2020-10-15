import React, { useEffect } from 'react';
import './Projects/FontAwesomeIcons';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Body.css';
import About from './About/About';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import RoundOff from './Roundoff/RoundOff';

const Body = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className="body__container">
			<div className="main__body">
				<Intro />
				<About data="fade-up" />
				<Projects data="fade-up" />
				<RoundOff />
			</div>
		</div>
	);
};

export default Body;
