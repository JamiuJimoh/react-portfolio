import React from 'react';
import Typed from 'react-typed';
import './Intro.css';

const Intro = () => {
	const typed = ([ str1, str2, str3 ]) => {
		return <Typed strings={[ str1, str2, str3 ]} typeSpeed={70} backSpeed={70} loop />;
	};

	return (
		<div className="intro">
			<p>
				Hellooo, I am
			</p>
			<h1 className="glitchy">
				<span aria-hidden="true">JAMIU JIMOH.</span>
				JAMIU JIMOH.
				<span aria-hidden="true">JAMIU JIMOH.</span>
			</h1>
			<p className="introd">
				{typed([ 'Frontend developer', 'MERN stack developer', 'Aspiring fullstack developer.' ])}
			</p>
			<button className="intro__btn">Get In Touch</button>
		</div>
	);
};

export default Intro;
