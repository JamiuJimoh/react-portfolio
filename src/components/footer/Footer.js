import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<div className="socials">
				<a className="social__link grown" href="https://www.instagram.com/3ergio__/">
					<FontAwesomeIcon icon={[ 'fab', 'instagram' ]} />
				</a>
				<a className="social__link grown" href="https://twitter.com/hyperjay55">
					<FontAwesomeIcon icon={[ 'fab', 'twitter' ]} />
				</a>
				<a className="social__link grown" href="https://www.linkedin.com/in/jamiu-jimoh/">
					<FontAwesomeIcon icon={[ 'fab', 'linkedin' ]} />
				</a>
				<a className="social__link grown" href="https://github.com/JamiuJimoh">
					<FontAwesomeIcon icon={[ 'fab', 'github' ]} />
				</a>
			</div>
			<p>Content created by &copy; Jamiu Jimoh</p>
		</div>
	);
};

export default Footer;
