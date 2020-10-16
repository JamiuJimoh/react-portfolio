import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navbar from './body/navbar/Navbar';
import Body from './body/screen/Body';
import particleOptions from './particles';
import './particles.css';

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
			</div>
		);
	}
}

export default App;
