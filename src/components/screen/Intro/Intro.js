import React from 'react';
import Typed from 'react-typed';
import './Intro.css';

const Intro = () => {
	const typed = ([ str1, str2, str3 ]) => {
		return <Typed strings={[ str1, str2, str3 ]} typeSpeed={15} backSpeed={1} loop />;
	};

	return (
		<div className="intro">
			<p>Hello, I am</p>
			<h1>
				JAMIU JIMOH.
			</h1>
			<p className="introd">
				{typed([ 'Frontend developer', 'MERN stack developer', 'Aspiring fullstack developer.' ])}
			</p>
			<a href="mailto:hyperjay55@gmail.com" className="intro__btn">Get In Touch</a>
		</div>
	);
};

export default Intro;
