// this method
class IceCreamGuy extends React.Component {
	get food() {
		return 'ice cream';
	}

	render() {
		return <h1>I like {this.food}.</h1>;
	}
}
// >> food method doesn't need () as its a getter method

// Event listener example
class Button extends React.Component {
	scream() {
		alert('AAAAAAAAHHH!!!!!');
	}

	render() {
		return <button onClick={this.scream}>AAAAAH!</button>;
	}
}

// Contact form example
import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			password: 'swordfish',
			authorized: false
		};
		this.authorize = this.authorize.bind(this);
	}

	authorize(e) {
		const password = e.target.querySelector('input[type="password"]').value;
		const auth = password == this.state.password;
		console.log(auth);
		this.setState({
			authorized: auth
		});
	}

	render() {
		const login = (
			<form action="#" onSubmit={this.authorize}>
				<input type="password" placeholder="Password" />
				<input type="submit" />
			</form>
		);
		const contactInfo = (
			<ul>
				<li>client@example.com</li>
				<li>555.555.5555</li>
			</ul>
		);
		return (
			<div id="authorization">
				<h1>{this.state.authorized ? 'Contact' : 'Enter the Password'}</h1>
				{this.state.authorized ? contactInfo : login}
			</div>
		);
	}
}

ReactDOM.render(<Contact />, document.getElementById('app'));
