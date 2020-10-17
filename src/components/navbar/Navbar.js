import React from 'react';
import './Navbar.css';
import logo from './logo.png'

const Navbar = (props) => {
	const onHandleClick = () => {
		props.handleBarState();
	};

	return (
		<header>
			<img src={logo} alt="logo" className="logo" />
			<div className={props.barState ? 'menu-btn open' : 'menu-btn'} onClick={onHandleClick}>
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
