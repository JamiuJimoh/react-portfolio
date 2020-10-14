import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
						<Link to="#">About</Link>
					</li>
					<li>
						<Link to="#">Projects</Link>
					</li>
					<li>
						<Link to="#">Contact</Link>
					</li>
				</ol>
			</nav>
			<Link>
				<button>Resume</button>
			</Link>
		</header>
	);
};

export default Navbar;
