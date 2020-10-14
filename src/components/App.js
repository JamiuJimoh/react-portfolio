import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navbar from './body/navbar/Navbar';
import Body from './body/screen/Body';
import particleOptions from './particles';
import './particles.css';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Particles className="particles" params={particleOptions} />
				<Body />
			</div>
		);
	}
}

export default App;
