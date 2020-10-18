import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';
import resume from './resume.pdf';

const Sidebar = (props) => {
	return (
		<div className={props.barState ? 'sidebar__open' : 'sidebar__close'}>
			<div className="sidebar__content">
				<section className="socials">
					<a className="social__link" href="https://www.instagram.com/3ergio__/">
						<FontAwesomeIcon icon={[ 'fab', 'instagram' ]} />
					</a>
					<a className="social__link" href="https://twitter.com/hyperjay55">
						<FontAwesomeIcon icon={[ 'fab', 'twitter' ]} />
					</a>
					<a className="social__link" href="https://www.linkedin.com/in/jamiu-jimoh/">
						<FontAwesomeIcon icon={[ 'fab', 'linkedin' ]} />
					</a>
					<a className="social__link" href="https://github.com/JamiuJimoh">
						<FontAwesomeIcon icon={[ 'fab', 'github' ]} />
					</a>
				</section>
				<nav className="sidebar">
					<ol className="nav__links">
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#roundoff">Contact</a>
						</li>
						<li>
							<a className="btn" href={resume}>Resume</a>
						</li>
					</ol>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
