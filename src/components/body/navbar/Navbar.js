import React, { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
	const [ menuBtn, setMenuBtn ] = useState(false);

	const onHandleClick = () => {
		setMenuBtn(!menuBtn);
	};

	return (
		<header>
			<img src="" alt="logo" className="logo" />
			<div className={menuBtn ? 'menu-btn open' : 'menu-btn'} onClick={onHandleClick}>
				<div className="menu-btn__burger" />
			</div>
			<nav>
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
				</ol>
			</nav>
			<button>Resume</button>
		</header>
	);
};

export default Navbar;
