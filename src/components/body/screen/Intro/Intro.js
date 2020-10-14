import React from 'react';
import Typed from 'react-typed';

const Intro = () => {
	const typed = ([ str1, str2, str3 ]) => {
		return <Typed strings={[ str1, str2, str3 ]} typeSpeed={70} backSpeed={70} loop />;
	};

	return (
		<div className="intro">
			<p>Helloooo <span role='img' aria-label='img'>😎</span> , I am</p>
			<h1>JAMIU JIMOH.</h1>
			<p className="introd">
				{typed([ 'Frontend developer', 'MERN stack developer', 'Aspiring fullstack developer.' ])}
			</p>
			<button className="intro__btn">Get In Touch</button>
		</div>
	);
};

export default Intro;
