import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './navbar/Navbar';
import Body from './screen/Body';
import particleOptions from './particles';
import './particles.css';
import './App.css';
import Footer from './footer/Footer';

class App extends Component {
	state = {
		barState: false
	};

	handleState = () => {
		this.setState({ barState: !this.state.barState });
	};

	bodyClickState = () => {
		this.setState({ barState: false });
	};

	render() {
		return (
			<div>
				<Navbar handleBarState={this.handleState} barState={this.state.barState} />
				<Particles className="particles" params={particleOptions} />
				<a href="#intro" className="grown">
					<FontAwesomeIcon icon="angle-double-up" />
				</a>
				<Body bodyClickState={this.bodyClickState} barState={this.state.barState} />
				<Footer />
			</div>
		);
	}
}

export default App;
