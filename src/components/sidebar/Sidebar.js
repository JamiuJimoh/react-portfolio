import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';

const Sidebar = (props) => {
	return (
		<div className={props.barState ? 'sidebar__open' : 'sidebar__close'}>
			<div className="sidebar__content">
            <section className="socials">
				<a className='social__link' href="/">
					<FontAwesomeIcon icon={[ 'fab', 'instagram' ]} />
				</a>
				<a className='social__link' href="/">
					<FontAwesomeIcon icon={[ 'fab', 'twitter' ]} />
				</a>
				<a className='social__link' href="/">
					<FontAwesomeIcon icon={[ 'fab', 'linkedin' ]} />
				</a>
				<a className='social__link' href="/">
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
						<a className='btn' href="/">Resume</a>
					</li>
				</ol>
			</nav>
            </div>
		</div>
	);
};

export default Sidebar;
