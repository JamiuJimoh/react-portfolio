import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navbar from './navbar/Navbar';
import Body from './screen/Body';
import particleOptions from './particles';
import './particles.css';
import Footer from './footer/Footer';

class App extends Component {
	state = {
		barState: false
	};

	handleState = () => {
		this.setState({ barState: !this.state.barState });
	};

	bodyClickState=()=>{
		this.setState({barState:false})
	}

	render() {
		return (
			<div>
				<Navbar handleBarState={this.handleState} barState={this.state.barState} />
				<Particles className="particles" params={particleOptions} />
				<Body bodyClickState={this.bodyClickState} barState={this.state.barState} />
				<Footer />
			</div>
		);
	}
}

export default App;
