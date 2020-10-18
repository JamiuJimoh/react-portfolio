import React, { useEffect } from 'react';
import './FontAwesomeIcons';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Body.css';
import About from './About/About';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import RoundOff from './Roundoff/RoundOff';
import Sidebar from '../sidebar/Sidebar';

const Body = (props) => {
	useEffect(() => {
		Aos.init({
			duration: 2000,
			once: true
		});
	}, []);

	const onHandleClick = () => {
		props.bodyClickState();
	};

	return (
		<div className="body__container">
			<Sidebar handleBarState={onHandleClick} barState={props.barState} />
			<div onClick={onHandleClick} className={props.barState ? 'main__body glass__effect' : 'main__body'}>
				<Intro />
				<About data="fade-up" />
				<Projects data="fade-up" />
				<RoundOff />
			</div>
		</div>
	);
};

export default Body;
